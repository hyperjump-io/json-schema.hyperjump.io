<script>
  import jsonLexer from "../lib/json-lexer";


  export let theme = "solarized-dark";
  export let value = "";

  let src;

  export const focus = () => {
    src.focus();
  }

  $: numberOfLines = (value.match(/\n/g) || []).length + 1;

  $: tokens = (function () {
    jsonLexer.reset(value);
    return Array.from(jsonLexer);
  }());
</script>

<div class="Editor {theme}">
  <div class="line-numbers">
    {#each [...Array(numberOfLines)] as _, lineNumber}
    <div>{lineNumber + 1}</div>
    {/each}
  </div>
  <div class="editable">
    <pre class="highlighted">
      {#each tokens as token}
        {#if token.type === "grouping"}
          <span class="grouping">{token.value}</span>
        {:else if token.type === "property"}
          "<span class="property">{token.value.substring(1, token.value.length - 1)}</span>"
        {:else if token.type === "string"}
          "<span class="string">{token.value.substring(1, token.value.length - 1)}</span>"
        {:else if token.type === "number"}
          <span class="number">{token.value}</span>
        {:else if token.type === "boolean"}
          <span class="boolean">{token.value}</span>
        {:else if token.type === "null"}
          <span class="null">{token.value}</span>
        {:else}
          {token.value}
        {/if}
      {/each}
    </pre>
    <textarea class="src" aria-label="Code Editor" bind:this={src} bind:value={value} on:input></textarea>
  </div>
</div>

<style>
  .Editor {
    display: flex;
    font-size: 11pt;
    overflow: scroll;
    flex-grow: 1;
    border: var(--editor-border);
    border-top: none;
    line-height: 1.2;
  }

  .line-numbers {
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

  .grouping {
    color: var(--grouping-color);
  }

  .property {
    color: var(--property-color);
  }

  .string {
    color: var(--string-color);
  }

  .number {
    color: var(--number-color);
  }

  .boolean {
    color: var(--boolean-color);
  }

  .null {
    color: var(--null-color);
  }
</style>
