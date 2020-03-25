<script>
  import JsonSchema from "@hyperjump/json-schema";
  import Editor from "../components/Editor.svelte";
  import EditorTabs from "../components/EditorTabs.svelte";
  import Results from "../components/Results.svelte";


  const defaultSchemaVersion = "https://json-schema.org/draft/2019-09/schema";
  const schemaUrl = "https://json-schema.hyperjump.io/schema";

  const theme = "solarized-dark";

  const newTab = (function () {
    let sequence = 1;

    return (label = undefined, url = undefined) => {
      const id = url || `${schemaUrl}${++sequence}`;
      return { label: label || `Schema ${sequence}`, text: `{
  "$id": "${id}",
  "$schema": "${defaultSchemaVersion}"
}` };
    }
  }());

  let schemas = [newTab("Schema", schemaUrl)];
  let instances = [{ label: "Instance", text: `{}` }];

  JsonSchema.setMetaOutputFormat(JsonSchema.BASIC);

  $: validate = (async function () {
    schemas.forEach((schema) => {
      JsonSchema.add(JSON.parse(schema.text || "true"), schemaUrl, defaultSchemaVersion);
    });

    const doc = await JsonSchema.get(schemaUrl);
    return JsonSchema.validate(doc);
  }());

  $: validationResults = (async function () {
    if (instances[0].text !== "") {
      let v;
      try {
        v = await validate;
      } catch (e) {}

      if (v) {
        const output = v(JSON.parse(instances[0].text), JsonSchema.BASIC);
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
  <div class="schemas">
    <EditorTabs bind:tabs={schemas} newTab={newTab} />
  </div>
  <div class="results {theme}">
    <Results results={validate} />
  </div>

  <div class="instances">
    <EditorTabs bind:tabs={instances} />
  </div>
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

  main {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 200px;
    grid-gap: .5em;
    margin: .5em;
    height: 90%;

    --editor-padding: .25em;
    --editor-border: thin solid;
  }

  main :global(.Editor) {
    min-height: 200px;
  }

  .schemas {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .instances {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .results {
    border: thin solid;
    overflow: scroll;
    padding: .25em;
  }
</style>
