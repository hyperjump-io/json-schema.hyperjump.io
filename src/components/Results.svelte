<script>
  export let results;
</script>

{#await results}
  Validating ...
{:then _}
  Valid
{:catch error}
  {#if error.absoluteKeywordLocation}
    Invalid
    <ul>
      {#each error.errors as outputUnit}
        {#if !outputUnit.valid}
          <li><code>{outputUnit.instanceLocation}</code> fails schema constraint <code>{outputUnit.absoluteKeywordLocation}</code></li>
        {/if}
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
