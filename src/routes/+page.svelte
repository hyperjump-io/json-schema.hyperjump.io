<script>
  import YAML from "yaml";
  import JsonSchema from "@hyperjump/json-schema";
  import EditorTabs from "../components/EditorTabs.svelte";
  import Results from "../components/Results.svelte";
  import Footer from "../components/Footer.svelte";

  import "@hyperjump/oas-schema-validator";
  import "@hyperjump/json-schema-next";


  const DEBOUNCE_DELAY = 750;
  const defaultSchemaVersion = "https://json-schema.org/draft/2020-12/schema";
  const schemaUrl = "https://json-schema.hyperjump.io/schema";

  const theme = "solarized-dark";

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

  JsonSchema.setMetaOutputFormat(JsonSchema.BASIC);
  JsonSchema.addMediaTypePlugin("application/schema+yaml", {
    parse: async (response) => [YAML.parse(await response.text(), undefined)],
    matcher: (path) => path.endsWith(".schema.yaml")
  });

  $: validate = (async function () {
    schemas.forEach((schema, ndx) => {
      const externalId = ndx === 0 ? schemaUrl : "";
      JsonSchema.add(parse(schema.text || "true", format), externalId, defaultSchemaVersion);
    });

    const doc = await JsonSchema.get(schemaUrl);
    return JsonSchema.validate(doc);
  }());

  $: validationResults = (async function () {
    if (instances[selectedInstance].text !== "") {
      let v;
      try {
        v = await validate;
      } catch (e) { /* ignore */ }

      if (v) {
        const output = v(parse(instances[selectedInstance].text, format), JsonSchema.BASIC);
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
  <title>Hyperjump - JSON Schema Validator</title>
</svelte:head>

<div class="format">
  <button class="{format === 'json' ? 'selected' : ''}" on:click={setFormat("json")}>JSON</button><button class="{format === 'yaml' ? 'selected' : ''}" on:click={setFormat("yaml")}>YAML</button>
</div>

<main>
  <h1>Hyperjump - JSON Schema Validator</h1>

  <div class="editor-section">
    <EditorTabs ns="schemas" tabs={schemas} newTab={newSchema} active={0} bind:format={format} on:input={updateSchemas} />
  </div>
  <div class="editor-section">
    <EditorTabs ns="instances" tabs={instances} bind:selected={selectedInstance} bind:active={selectedInstance} newTab={newInstance} bind:format={format} on:input={updateInstances} />
  </div>

  <div class="results {theme}">
    <Results results={validate} />
  </div>
  <div class="results {theme}">
    {#await validate then _}
      <Results results={validationResults} />
    {/await}
  </div>

  <Footer />
</main>

<style>
  h1 {
    margin: auto;
    grid-column-end: span 2;
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

  .format {
    position: absolute;
    margin: 1em;
    right: 0;
    background-color: var(--background-color);
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
