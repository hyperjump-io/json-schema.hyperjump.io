<script lang="ts">
  import { format as jsoncFormat, applyEdits } from "jsonc-parser";
  import * as YAML from "yaml";
  import { settings } from "../stores/settings.js";
  import FormatterIcon from "./FormatterIcon.svelte";
  import jsonLexer from "../lib/json-lexer.js";
  import yamlLexer from "../lib/yaml-lexer.js";

  type Props = {
    value?: string;
    format?: "json" | "yaml";
    oninput?: (value: string) => void;
  };

  let {
    value = $bindable(""),
    format = "json",
    oninput = () => {}
  }: Props = $props();

  let src: HTMLTextAreaElement | undefined = $state();

  export const focus = () => {
    src!.focus();
  };

  let numberOfLines = $derived((value.match(/\n/g) ?? []).length + 1);

  let tokens = $derived.by(() => {
    if (format === "json") {
      jsonLexer.reset(value + "\n");
      return Array.from(jsonLexer);
    } else if (format === "yaml") {
      yamlLexer.reset(value + "\n");
      return Array.from(yamlLexer);
    } else {
      throw Error("Unsupported format");
    }
  });

  const formatCode = () => {
    if (format === "json") {
      const edits = jsoncFormat(value, undefined, { tabSize: $settings.indentSize, insertSpaces: true, eol: "\n", keepLines: $settings.keepLines });
      value = applyEdits(value, edits);
    } else if (format === "yaml") {
      value = YAML.stringify(YAML.parse(value), null, " ".repeat($settings.indentSize));
    } else {
      throw Error("Unsupported format");
    }
  };
</script>

<div class="Editor">
  <div class="editor-container">
    <div class="line-numbers">
      {#each [...Array(numberOfLines)] as _, lineNumber (lineNumber)}<!-- eslint-disable-line @typescript-eslint/no-unsafe-assignment -->
      <div>{lineNumber + 1}</div>
      {/each}
    </div>
    <div class="editable">
      <pre class="highlighted"><!--
     -->{#each tokens as token, index (index)}<!--
       -->{#if token.type === "comment"}<!--
         --><span class="comment">{token.value}</span><!--
       -->{:else if token.type === "accent1"}<!--
         --><span class="accent1">{token.value}</span><!--
       -->{:else if token.type === "accent2"}<!--
         --><span class="accent2">{token.value}</span><!--
       -->{:else if token.type === "accent3"}<!--
         --><span class="accent3">{token.value}</span><!--
       -->{:else if token.type === "accent4"}<!--
         --><span class="accent4">{token.value}</span><!--
       -->{:else if token.type === "accent5"}<!--
         --><span class="accent5">{token.value}</span><!--
       -->{:else if token.type === "accent6"}<!--
         --><span class="accent6">{token.value}</span><!--
       -->{:else if token.type === "accent7"}<!--
         --><span class="accent7">{token.value}</span><!--
       -->{:else if token.type === "accent8"}<!--
         --><span class="accent8">{token.value}</span><!--
       -->{:else}<!--
         -->{token.value}<!--
       -->{/if}<!--
     -->{/each}<!--
   --></pre>
      <textarea class="src" aria-label="Code Editor" bind:this={src} bind:value={value} oninput={(event) => { oninput(event.currentTarget.value); }}></textarea>
    </div>
  </div>
  <button class="formatter" type="button" title="Format Code" onclick={() => formatCode()}><FormatterIcon /></button>
</div>

<style>
  .Editor {
    display: flex;
    overflow: scroll;
    flex-grow: 1;
    border: var(--editor-border);
    border-top: none;
    line-height: 1.2;
    font-size: large;
  }

  .editor-container {
    display: flex;
    flex-grow: 1;
  }

  .line-numbers {
    position: sticky;
    height: fit-content;
    font-family: monospace;
    left: 0;
    background: var(--background-color);
    padding: var(--editor-padding) 0;
  }

  .line-numbers > * {
    text-align: right;
    padding: 0 var(--editor-padding);
    border-right: var(--editor-border);
  }

  .editable {
    display: grid;
    width: 100%;
    resize: none;
    padding: var(--editor-padding);
  }

  .editable > * {
    font-family: monospace;
    font-size: inherit;
    white-space: pre;
    line-height: 1.2;
    padding: 0;
    margin: 0;
    border: none;
    resize: none;
    outline: none;
  }

  .highlighted {
    grid-row-start: 1;
    grid-column-start: 1;
  }

  .src {
    grid-row-start: 1;
    grid-column-start: 1;
    background-color: transparent;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
  }

  .formatter {
    position: sticky;
    align-self: flex-start;
    top: .5em;
    right: .5em;
    border-radius: .5em;
    opacity: 75%;
  }

  .formatter:hover {
    opacity: 100%;
  }

  .comment {
    color: var(--comment-color);
  }

  .accent1 {
    color: var(--accent1-color);
  }

  .accent2 {
    color: var(--accent2-color);
  }

  .accent3 {
    color: var(--accent3-color);
  }

  .accent4 {
    color: var(--accent4-color);
  }

  .accent5 {
    color: var(--accent5-color);
  }

  .accent6 {
    color: var(--accent6-color);
  }

  .accent7 {
    color: var(--accent7-color);
  }

  .accent8 {
    color: var(--accent8-color);
  }
</style>
