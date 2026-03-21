<script lang="ts">
  import { onMount, tick } from "svelte";
  import { replaceState } from "$app/navigation"; // eslint-disable-line import/no-unresolved
  import * as YAML from "js-yaml";

  import { setShouldValidateFormat } from "$lib/json-schema.ts";
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
  import ShareIcon from "../components/ShareIcon.svelte";
  import CheckIcon from "../components/CheckIcon.svelte";

  import { compressToUriFragment, decompressFromUriFragment } from "$lib/compression";
  import { settings } from "../stores/settings.js";

  import type { Browser } from "@hyperjump/browser";
  import type { OutputFormat, OutputUnit, SchemaObject, Validator } from "@hyperjump/json-schema";
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
  "$schema": "${defaultSchemaVersion}",
  "$id": "${id}"
}`,
    yaml: (id) => `$schema: '${defaultSchemaVersion}'
$id: '${id}'`
  };

  const newInstance = (function () {
    let sequence = 1;

    return () => ({ label: `Instance ${sequence++}`, text: "" });
  }());

  let schemas: Tab[] = $state([newSchema("Schema", schemaUrl, true)]);
  let selectedSchema = $state(0);
  let schemaDocuments: Promise<SchemaDocument>[] = [];
  let compileResults: Promise<OutputUnit> | undefined = $state();
  let validator: Promise<Validator | undefined> | undefined = $state();
  let triggerSchemaValidation = $state(0);
  let isLoadingSchemaFromUrl = $state(false);

  // $derived doesn't handle async code well. This was the only thing that worked.
  $effect(() => {
    if (isLoadingSchemaFromUrl) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    triggerSchemaValidation;

    // eslint-disable-next-line @typescript-eslint/require-await
    schemaDocuments[selectedSchema] = (async function () {
      const externalId = selectedSchema === 0 ? schemaUrl : "";
      const schema = parse(schemas[selectedSchema].text ?? "true", format);
      return buildSchemaDocument(schema as SchemaObject, externalId, defaultSchemaVersion);
    }());

    const browser = (async function () {
      const schemaRegistry: Record<string, SchemaDocument> = {};
      try {
        schemaRegistry[schemaUrl] = await schemaDocuments[0];
      } catch (_error) {
      }
      for (const schemaDocument of schemaDocuments) {
        try {
          schemaRegistry[(await schemaDocument).baseUri] = await schemaDocument;
        } catch (_error) {
        }
      }

      // @ts-expect-error Ignore my hack
      return { _cache: schemaRegistry } as Browser;
    }());

    compileResults = (async function () {
      const schema = await getSchema((await schemaDocuments[selectedSchema]).baseUri, await browser);
      await compile(schema);
      return { valid: true } as OutputUnit;
    }());

    validator = (async function () {
      try {
        if (await schemaDocuments[0]) {
          const schema = await getSchema(schemaUrl, await browser);
          const compiled = await compile(schema);
          return ((value: Json, outputFormat: OutputFormat) => interpret(compiled, Instance.fromJs(value), outputFormat)) as Validator;
        }
      } catch (_error) {
      }
    }());
  });

  const onSchemaTabClose = (index: number) => {
    schemaDocuments = [];
    schemas.forEach((tab, index) => {
      // eslint-disable-next-line @typescript-eslint/require-await
      schemaDocuments[index] = (async function () {
        const externalId = selectedSchema === 0 ? schemaUrl : "";
        const schema = parse(tab.text ?? "true", format);
        return buildSchemaDocument(schema as SchemaObject, externalId, defaultSchemaVersion);
      }());
    });

    if (selectedSchema !== index) {
      triggerSchemaValidation++;
    }
  };

  let instances: Tab[] = $state([newInstance()]);
  let selectedInstance = $state(0);

  const validationResults = $derived.by(async () => {
    if (instances[selectedInstance].text !== "") {
      setShouldValidateFormat($settings.format);
      let v = await validator;

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
      return YAML.load(src) as Json;
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

  // Share a link

  type ShareableState = {
    schemas: Tab[];
    instances: Tab[];
    selectedSchema: number;
    selectedInstance: number;
    format: "json" | "yaml";
  };

  const encodeState = async (): Promise<string> => {
    const state: ShareableState = {
      schemas,
      instances,
      selectedSchema,
      selectedInstance,
      format
    };
    return await compressToUriFragment(state);
  };

  const decodeState = async (hash: string) => {
    const state = await decompressFromUriFragment<ShareableState>(hash);
    schemas = state.schemas;
    instances = state.instances;
    selectedSchema = state.selectedSchema;
    selectedInstance = state.selectedInstance;
    format = state.format;
  };

  let isCopied = $state(false);

  const share = async () => {
    const hash = await encodeState();
    const url = `${window.location.origin}#${hash}`;
    await navigator.clipboard.writeText(url);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 2000);
  };

  onMount(async () => {
    const hash = window.location.hash.substring(1);

    if (hash.startsWith("schema=")) {
      isLoadingSchemaFromUrl = true;
      const match = /^schema=(?:(?<format>json|yaml),)?(?<url>.*)$/.exec(hash)?.groups;
      if (match) {
        schemas[0].text = `... Loading Schema from ${match.url}`;

        try {
          const response = await fetch(match.url);
          if (response.ok) {
            isLoadingSchemaFromUrl = false;
            const schemaContent = await response.text();

            schemas[0].text = schemaContent;
            format = (match.format as "json" | "yaml") ?? "json";
          } else {
            schemas[0].text = `Failed to load schema ${response.status} ${response.statusText}`;
          }
        } catch (_error) {
          schemas[0].text = `Failed to load schema from ${match.url}`;
        }
      }
    } else if (hash) {
      await decodeState(hash);
    }

    await tick();
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    replaceState(window.location.pathname, {});
  });
</script>

<svelte:head>
  <title>Hyperjump - JSON Schema</title>
</svelte:head>

<main>
  <div class="header">
    <div class="left-controls">
      <ThemeSelector />
    </div>

    <h1>Hyperjump - JSON&nbsp;Schema</h1>

    <div class="right-controls">
      <div class="share">
      <button aria-label="Share" title="Copy a shareable link" onclick={share}>
        {#if isCopied}
          <CheckIcon size="1rem" />
        {:else}
          <ShareIcon size="1rem" />
        {/if}
      </button>
      </div>
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
      bind:selected={selectedSchema}
      active={0}
      newTab={newSchema}
      format={format}
      onclose={onSchemaTabClose}
      disabled={isLoadingSchemaFromUrl}
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
    <Results results={compileResults} />
  </div>
  <div class="results">
    {#await validator then}
      <Results results={validationResults} />
    {/await}
  </div>

  <Footer />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 200px auto;
    gap: .5em;
    padding: .5em;
    height: 100%;

    --editor-padding: .25em;
    --editor-border: thin solid;
  }

  .header {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "left title right";
    align-items: center;
  }

  .header h1 {
    grid-area: title;
    margin: 0;
    text-align: center;
  }

  .left-controls {
    grid-area: left;
    justify-self: start;
  }

  .right-controls {
    grid-area: right;
    display: flex;
    justify-self: end;
  }

  /* Adjust the header for small screens */
  @media (max-width: 800px) {
    .header {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "title title"
        "left right";
    }
  }

  .format {
    display: flex;
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

  .share {
    display: flex;
    align-items: center;
    margin-right: .5rem;
  }

  .editor-section {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    min-height: 200px;
  }

  .results {
    border: var(--editor-border);
    overflow: scroll;
    padding: var(--editor-padding);
  }
</style>
