import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import svelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";

export default defineConfig([
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  stylistic.configs.customize({
    arrowParens: true,
    braceStyle: "1tbs",
    commaDangle: "never",
    jsx: false,
    quotes: "double",
    semi: true
  }),
  ...svelte.configs.recommended,
  {
    files: ["**/*.svelte", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        svelteConfig
      }
    }
  },
  { ignores: [".svelte-kit/", "build/"] },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      "import/resolver": {
        node: {},
        exports: {}
      },
      "import/parsers": {
        espree: [".js"]
      }
    }
  },
  {
    rules: {
      "no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      "no-console": "error",

      // Stylistic
      "@stylistic/yield-star-spacing": ["error", "after"],
      "@stylistic/multiline-ternary": "off",
      "@stylistic/no-mixed-operators": "off",
      "@stylistic/quote-props": ["error", "as-needed"]
    }
  }
]);
