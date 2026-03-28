<script lang="ts">
  import CheckIcon from "./CheckIcon.svelte";
  import CopyIcon from "./CopyIcon.svelte";

  type Props = {
    subject: string;
    title: string;
  };

  let { subject, title }: Props = $props();

  let isCopied = $state(false);

  const copy = async () => {
    await navigator.clipboard.writeText(subject);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 2000);
  };
</script>

<button class="copy-button" aria-label="Copy" title={title} onclick={copy}>
  {#if isCopied}
    <CheckIcon size="1rem" />
  {:else}
    <CopyIcon size="1rem" />
  {/if}
</button>

<style>
  .copy-button {
    display: flex;
    padding: 0.25rem;
  }
</style>
