<script lang="ts">
  import type { OutputUnit } from "@hyperjump/json-schema";

  let { results } = $props();
</script>

{#await results}
  Validating ...
{:then results}
  {results ? "Valid" : ""}
{:catch error}
  {#if error.output}
    Invalid
    <ul>
      {#each (error.output as OutputUnit).errors ?? [] as outputUnit, index (index)}
        <li><code>{outputUnit.instanceLocation}</code> fails schema constraint <code>{outputUnit.absoluteKeywordLocation}</code></li>
      {/each}
    </ul>
  {:else}
    {error.message}
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
