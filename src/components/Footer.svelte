<script lang="ts">
  import GitHubLink from "./GitHubLink.svelte";
  import NpmLink from "./NpmLink.svelte";
  import JsonSchemaLink from "./JsonSchemaLink.svelte";
</script>

<footer>
  <ul class="links">
    <li>
      <GitHubLink href="https://github.com/hyperjump-io/json-schema.hyperjump.io">
        hyperjump-io/json-schema.hyperjump.io
      </GitHubLink>
    </li>
    <li>
      <GitHubLink href="https://github.com/hyperjump-io/json-schema">
        hyperjump-io/json-schema
      </GitHubLink>
    </li>
    <li>
      <NpmLink href="https://www.npmjs.com/package/@hyperjump/json-schema">
        @hyperjump/json-schema
      </NpmLink>
    </li>
    <li>
      <JsonSchemaLink href="https://json-schema.org">
        JSON Schema
      </JsonSchemaLink>
    </li>
  </ul>
</footer>

<style>
  footer {
    margin: auto;
    grid-column-end: span 2;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li:not(:first-child) {
    margin-left: 1em;
  }
</style>
