<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    href: string;
    children?: Snippet;
  };

  let {
    href = "",
    children
  }: Props = $props();
</script>

<a href={href}>
  <!-- eslint-disable-next-line max-len -->
  <svg height="1em" viewBox="0 0 780 250" version="1.1" aria-hidden="true"><path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>
  {@render children?.()}
</a>

<style>
  a {
    display: flex;
  }

  svg {
    margin-top: .25em;
    margin-right: .5em;
  }
</style>
