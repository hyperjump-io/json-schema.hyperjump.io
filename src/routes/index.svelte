<script>
  import JsonSchema from "@hyperjump/json-schema";
  import Editor from "../components/Editor.svelte";
  import Results from "../components/Results.svelte";


  const defaultSchemaVersion = "https://json-schema.org/draft/2019-09/schema";
  const schemaUrl = "https://json-schema.hyperjump.io/schema";

  const theme = "solarized-dark";

  let schema = `{
  "$id": "${schemaUrl}",
  "$schema": "${defaultSchemaVersion}"
}`;

  let instance = `{}`;

  JsonSchema.setMetaOutputFormat(JsonSchema.BASIC);

  $: validate = (async function () {
    if (schema !== "") {
      JsonSchema.add(JSON.parse(schema), schemaUrl, defaultSchemaVersion);

      const doc = await JsonSchema.get(schemaUrl);
      return JsonSchema.validate(doc);
    }
  }());

  $: validationResults = (async function () {
    if (instance !== "") {
      let v;
      try {
        v = await validate;
      } catch (e) {}

      if (v) {
        const output = v(JSON.parse(instance), JsonSchema.BASIC);
        if (output.valid) {
          return output;
        } else {
          throw output;
        }
      }
    }
  }());
</script>

<svelte:head>
  <title>JSON Schema Validator</title>
</svelte:head>

<h1>JSON Schema Validator</h1>

<main>
  <h2>Schema</h2>
  <Editor bind:value={schema} />
  <div class="results {theme}">
    <Results results={validate} />
  </div>

  <h2>Instance</h2>
  <Editor bind:value={instance} />
  <div class="results {theme}">
    {#await validate then _}
      <Results results={validationResults} />
    {/await}
  </div>
</main>

<style>
  h1 {
    margin: auto;
  }

  h2 {
    margin: 0;
  }

  main {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.25em 1fr 200px;;
    grid-gap: .5em;
    margin: .5em;
    height: 90%;
  }

  main :global(.Editor) {
    min-height: 200px;
    padding: .25em;
    resize: none;
  }

  .results {
    border: thin solid;
    overflow: scroll;
    padding: .25em;
  }
</style>
