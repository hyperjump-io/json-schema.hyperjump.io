<script>
  import YAML from "yaml";

  import { addSchema, validate, setMetaSchemaOutputFormat, addMediaTypePlugin } from "@hyperjump/json-schema";
  import { setExperimentalKeywordEnabled, BASIC } from "@hyperjump/json-schema/experimental";
  import "@hyperjump/json-schema/draft-2020-12";
  import "@hyperjump/json-schema/draft-2019-09";
  import "@hyperjump/json-schema/draft-07";
  import "@hyperjump/json-schema/draft-06";
  import "@hyperjump/json-schema/draft-04";
  import "@hyperjump/json-schema/openapi-3-1";
  import "@hyperjump/json-schema/openapi-3-0";

  import ThemeSelector from "../components/ThemeSelector.svelte";
  import Settings from "../components/Settings.svelte";
  import EditorTabs from "../components/EditorTabs.svelte";
  import Results from "../components/Results.svelte";
  import Footer from "../components/Footer.svelte";


  const DEBOUNCE_DELAY = 750;
  const defaultSchemaVersion = "https://json-schema.org/draft/2020-12/schema";
  const schemaUrl = "https://json-schema.hyperjump.io/schema";

  let format = "json";

  const parse = (src, format) => {
    if (format === "yaml") {
      return YAML.parse(src);
    } else {
      return JSON.parse(src);
    }
  };

  const newSchemaStub = {
    json: (id) => `{
  "$id": "${id}",
  "$schema": "${defaultSchemaVersion}"
}`,
    yaml: (id) => `$id: '${id}'
$schema: '${defaultSchemaVersion}'`
  };

  const setFormat = (newFormat) => () => {
    format = newFormat;
    schemas = [newSchema("Schema", schemaUrl, true)];
    instances = [newInstance("Instance")];
    selectedInstance = 0;
  };

  const newSchema = (function () {
    let sequence = 1;

    return (label = undefined, url = undefined, persistent = false) => {
      const id = url || `${schemaUrl}${++sequence}`;
      return { label: label || `Schema ${sequence}`, text: newSchemaStub[format](id), persistent: persistent };
    };
  }());

  const newInstance = (function () {
    let sequence = 1;

    return () => ({ label: `Instance ${sequence++}`, text: "" });
  }());

  let schemas = [newSchema("Schema", schemaUrl, true)];
  let instances = [newInstance("Instance")];
  let selectedInstance = 0;

  const debounce = function (fn, delay) {
    let timer;
    return ({ detail }) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(detail), delay);
    };
  };
  const updateSchemas = debounce((detail) => schemas = detail, DEBOUNCE_DELAY);
  const updateInstances = debounce((detail) => instances = detail, DEBOUNCE_DELAY);

  setMetaSchemaOutputFormat(BASIC);
  addMediaTypePlugin("application/schema+yaml", {
    parse: async (response) => [YAML.parse(await response.text())],
    matcher: (path) => path.endsWith(".schema.yaml")
  });

  addMediaTypePlugin("application/openapi+yaml", {
    parse: async (response, contentTypeParameters) => {
      const doc = YAML.parse(await response.text());

      let defaultDialect;
      const version = doc.openapi || contentTypeParameters.version;

      if (/^3\.0\.\d+(-.+)?$/.test(version)) {
        defaultDialect = "https://spec.openapis.org/oas/3.0/schema";
      } else if (/^3\.1\.\d+(-.+)?$/.test(version)) {
        if (!("jsonSchemaDialect" in doc) || doc.jsonSchemaDialect === "https://spec.openapis.org/oas/3.1/dialect/base") {
          defaultDialect = "https://spec.openapis.org/oas/3.1/schema-base";
        } else {
          defaultDialect = `https://spec.openapis.org/oas/3.1/schema-${encodeURIComponent(doc.jsonSchemaDialect)}`;
        }
      } else {
        throw Error("Invalid OpenAPI document. Add the 'openapi' field and try again.");
      }

      return [doc, defaultDialect];
    },
    matcher: (path) => /(\/|\.)openapi\.yaml$/.test(path)
  });

  setExperimentalKeywordEnabled("https://json-schema.org/keyword/dynamicRef", true);
  setExperimentalKeywordEnabled("https://json-schema.org/keyword/propertyDependencies", true);
  setExperimentalKeywordEnabled("https://json-schema.org/keyword/requireAllExcept", true);
  setExperimentalKeywordEnabled("https://json-schema.org/keyword/itemPattern", true);
  setExperimentalKeywordEnabled("https://json-schema.org/keyword/conditional", true);

  $: validator = (async function () {
    schemas.forEach((schema, ndx) => {
      const externalId = ndx === 0 ? schemaUrl : "";
      addSchema(parse(schema.text || "true", format), externalId, defaultSchemaVersion);
    });

    return validate(schemaUrl);
  }());

  $: validationResults = (async function () {
    if (instances[selectedInstance].text !== "") {
      let v;
      try {
        v = await validator;
      } catch (e) { /* ignore */ }

      if (v) {
        const output = v(parse(instances[selectedInstance].text, format), BASIC);
        if (output.valid) {
          return output;
        } else {
          throw { output };
        }
      }
    }
  }());
</script>

<svelte:head>
  <title>Hyperjump - JSON Schema</title>
</svelte:head>

<main>

  <div class="header">
    <ThemeSelector />

    <h1>Hyperjump - JSON Schema</h1>

    <div class="right-controls">
      <div class="format">
        <button class="{format === 'json' ? 'selected' : ''}" on:click={setFormat("json")}>JSON</button><button class="{format === 'yaml' ? 'selected' : ''}" on:click={setFormat("yaml")}>YAML</button>
      </div>
      <Settings />
    </div>
  </div>

  <div class="editor-section">
    <EditorTabs ns="schemas" tabs={schemas} newTab={newSchema} active={0} bind:format={format} on:input={updateSchemas} />
  </div>
  <div class="editor-section">
    <EditorTabs ns="instances" tabs={instances} bind:selected={selectedInstance} bind:active={selectedInstance} newTab={newInstance} bind:format={format} on:input={updateInstances} />
  </div>

  <div class="results">
    <Results results={validator} />
  </div>
  <div class="results">
    {#await validator then}
      <Results results={validationResults} />
    {/await}
  </div>

  <Footer />
</main>

<style>
  h1 {
    margin: auto;
  }

  main {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 200px auto;
    grid-gap: .5em;
    padding: .5em;
    height: 100%;

    --editor-padding: .25em;
    --editor-border: thin solid;
  }

  .header {
    grid-column-end: span 2;
    display: flex;
  }

  .right-controls {
    display: flex;
    align-items: center;
  }

  .format {
    display: flex;
    background-color: var(--background-color);
    align-items: center;
  }

  .format :first-child {
    border-radius: .25em 0 0 .25em;
  }

  .format :last-child {
    border-radius: 0 .25em .25em 0;
  }

  .format button:hover {
    opacity: 100%;
  }

  .format :not(.selected) {
    opacity: 50%;
  }

  .editor-section {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    min-height: 200px;
  }

  .results {
    border: thin solid;
    overflow: scroll;
    padding: .25em;
  }
</style>
