<script lang="ts">
  import ShareIcon from "./ShareIcon.svelte";
  import CheckIcon from "./CheckIcon.svelte";

  type Props = {
    onClick: () => Promise<string>;
  };

  let { onClick }: Props = $props();

  let isCopied = $state(false);

  const handleShare = async () => {
    const url = await onClick();
    await navigator.clipboard.writeText(url);
    isCopied = true;
    setTimeout(() => {
      isCopied = false;
    }, 2000);
  };
</script>

<div class="ShareButton">
  <button class="share" aria-label="Share" title="Copy a shareable link" onclick={handleShare}>
    {#if isCopied}
      <CheckIcon size="1rem" />
    {:else}
      <ShareIcon size="1rem" />
    {/if}
  </button>
</div>

<style>
  .ShareButton {
    display: flex;
    align-items: center;
  }

  .ShareButton button {
    display: flex;
    padding: 0.25rem;
  }
</style>
