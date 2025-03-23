<script lang="ts">
  import * as YAML from "yaml";

  import {} from "$lib/json-schema.ts";
  import {
    buildSchemaDocument,
    compile,
    getSchema,
    interpret,
    BASIC
  } from "@hyperjump/json-schema/experimental";
  import * as Instance from "@hyperjump/json-schema/instance/experimental";

  import ThemeSelector from "../components/ThemeSelector.svelte";
  import Settings from "../components/Settings.svelte";
  import EditorTabs from "../components/EditorTabs.svelte";
  import Results from "../components/Results.svelte";
  import Footer from "../components/Footer.svelte";

  import type { Browser } from "@hyperjump/browser";
  import type { OutputFormat, SchemaObject } from "@hyperjump/json-schema";
  import type { SchemaDocument } from "@hyperjump/json-schema/experimental";
  import type { Json } from "@hyperjump/json-pointer";
  import type { Tab } from "../components/EditorTabs.d.ts";

  const defaultSchemaVersion = "https://json-schema.org/draft/2020-12/schema";
  const schemaUrl = "https://json-schema.hyperjump.io/schema";

  let format: "json" | "yaml" = $state("json");

  const newSchema = (function () {
    let sequence = 1;

    return (label?: string, url?: string, persistent = false): Tab => {
      const id = url ?? `${schemaUrl}${++sequence}`;
      return {
        label: label ?? `Schema ${sequence}`,
        text: newSchemaStub[format](id),
        persistent: persistent
      };
    };
  }());

  const newSchemaStub: Record<string, (id: string) => string> = {
    json: (id) => `{
  "$id": "${id}",
  "$schema": "${defaultSchemaVersion}"
}`,
    yaml: (id) => `$id: '${id}'
$schema: '${defaultSchemaVersion}'`
  };

  const newInstance = (function () {
    let sequence = 1;

    return () => ({ label: `Instance ${sequence++}`, text: "" });
  }());

  let schemas: Tab[] = $state([newSchema("Schema", schemaUrl, true)]);

  const validator = $derived.by(async () => {
    const schemaDocuments: Record<string, SchemaDocument> = {};
    schemas.forEach((tab, ndx) => {
      const externalId = ndx === 0 ? schemaUrl : "";
      const schema = parse(tab.text ?? "true", format);
      const schemaDocument = buildSchemaDocument(schema as SchemaObject, externalId, defaultSchemaVersion);
      schemaDocuments[schemaDocument.baseUri] = schemaDocument;

      if (externalId) {
        schemaDocuments[externalId] = schemaDocument;
      }
    });

    // @ts-expect-error Ignore my hack
    const browser: Browser = { _cache: schemaDocuments };
    const schema = await getSchema(schemaUrl, browser);
    const compiled = await compile(schema);
    return (value: Json, outputFormat: OutputFormat) => interpret(compiled, Instance.fromJs(value), outputFormat);
  });

  let instances: Tab[] = $state([newInstance()]);
  let selectedInstance = $state(0);

  const validationResults = $derived.by(async () => {
    if (instances[selectedInstance].text !== "") {
      let v;
      try {
        v = await validator;
      } catch (_error) { /* ignore */ }

      if (v) {
        const output = v(parse(instances[selectedInstance].text, format), BASIC);
        if (output.valid) {
          return output;
        } else {
          // eslint-disable-next-line @typescript-eslint/only-throw-error
          throw { output };
        }
      }
    }
  });

  const parse = (src: string, format: string): Json => {
    if (format === "yaml") {
      return YAML.parse(src) as Json;
    } else {
      return JSON.parse(src) as Json;
    }
  };

  const setFormat = (newFormat: "json" | "yaml") => () => {
    format = newFormat;
    schemas = [newSchema("Schema", schemaUrl, true)];
    instances = [newInstance()];
    selectedInstance = 0;
  };
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
        <button class={format === "json" ? "selected" : ""} onclick={setFormat("json")}>JSON</button><button class={format === "yaml" ? "selected" : ""} onclick={setFormat("yaml")}>YAML</button>
      </div>
      <Settings />
    </div>
  </div>

  <div class="editor-section">
    <EditorTabs
      ns="schemas"
      bind:tabs={schemas}
      active={0}
      newTab={newSchema}
      format={format}
    />
  </div>
  <div class="editor-section">
    <EditorTabs
      ns="instances"
      bind:tabs={instances}
      bind:selected={selectedInstance}
      active={selectedInstance}
      newTab={newInstance}
      format={format}
    />
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
