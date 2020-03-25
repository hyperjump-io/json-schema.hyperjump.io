<script>
  import jsonLexer from "../lib/json-lexer";


  export let theme = "solarized-dark";
  export let value = "";

  $: tokens = (function () {
    jsonLexer.reset(value);
    return Array.from(jsonLexer);
  }());
</script>

<div class="Editor {theme}">
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
  <textarea class="src" bind:value={value}></textarea>
</div>

<style>
  .Editor {
    display: grid;
    box-sizing: border-box;
    height: 100%;
    overflow: scroll;
    border: thin solid;
    font-size: 11pt;
    resize: none;
  }

  .Editor > * {
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
