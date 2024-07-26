<script>
  export let results;
</script>

{#await results}
  Validating ...
{:then results}
  {results ? "Valid" : ""}
{:catch error}
  {#if error.output}
    Invalid
    <ul>
      {#each error.output.errors as outputUnit}
        <li><code>{outputUnit.instanceLocation}</code> fails schema constraint <code>{outputUnit.absoluteKeywordLocation}</code></li>
      {/each}
    </ul>
  {:else}
    {error}
  {/if}
{/await}

<style>
  code {
    background-color: var(--line-focus-background-color);
    padding: .25em;
    border-radius: .25em;
  }

  li {
    margin: .5em;
    line-height: 1.5em;
  }
</style>
