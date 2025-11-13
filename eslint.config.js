import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";

export default tseslint.config([
  { ignores: [".svelte-kit/", "build/"] },

  // TypeScript
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },

  // Stylistic
  ...tseslint.configs.stylisticTypeChecked,
  stylistic.configs.customize({
    arrowParens: true,
    braceStyle: "1tbs",
    commaDangle: "never",
    jsx: false,
    quotes: "double",
    semi: true
  }),

  // Import
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      "import/resolver": {
        typescript: {}
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".js", ".mjs", ".cjs", ".ts"]
      }
    }
  },

  // Svelte
  ...svelte.configs.recommended,
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".svelte"],
        parser: tseslint.parser,
        svelteConfig
      }
    }
  },

  // Rules
  {
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "no-console": "error",

      // Import
      "import/no-named-as-default-member": "off",

      // Stylistic
      "@stylistic/yield-star-spacing": ["error", "after"],
      "@stylistic/multiline-ternary": "off",
      "@stylistic/no-mixed-operators": "off",
      "@stylistic/quote-props": ["error", "as-needed"]
    }
  }
]);
