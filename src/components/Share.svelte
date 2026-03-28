<script lang="ts">
  import CloseIcon from "./CloseIcon.svelte";
  import CopyButton from "./CopyButton.svelte";
  import LinkIcon from "./LinkIcon.svelte";

  type Props = {
    url: string;
  };

  let { url }: Props = $props();

  let loadUrl = $state("");

  let isOpen = $state(false);
  let container: HTMLDivElement | undefined = $state();
  let urlInputElement: HTMLInputElement | undefined = $state();

  const toggleOpen = () => {
    isOpen = !isOpen;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && container && !event.composedPath().includes(container)) {
      isOpen = false;
    }
  };
</script>

<svelte:window onclick={handleClickOutside} />

<div class="Share" bind:this={container}>
  {#if isOpen}
  <div class="share-panel">
    <h2>Share</h2>

    <label for="share-state">Share this session</label>
    <div class="share-input">
      <input
        type="text"
        id="share-state"
        readonly
        value={url}
        bind:this={urlInputElement}
        onclick={() => urlInputElement?.select()}
      />
      <CopyButton subject={url} title="Copy URL" />
    </div>

    <label for="share-url">Share a session with a schema preloaded</label>
    <div class="share-input">
      <span class="prefixed-input">{window.location.origin}#schema=<input
          type="text"
          id="share-url"
          title="Schema URL"
          bind:value={loadUrl}
          placeholder="https://..."
        /></span>
      <CopyButton subject={window.location.origin + "#schema=" + loadUrl} title="Copy URL" />
    </div>
  </div>
  {/if}

  <button type="button" class="share-button" aria-label="Share" onclick={toggleOpen}>
    {#if isOpen}
      <CloseIcon size="1.5rem" />
    {:else}
      <LinkIcon size="1.5rem" />
    {/if}
  </button>
</div>

<style>
  .Share {
    position: relative;
  }

  h2 {
    margin: auto;
    margin-bottom: .5em;
    border-bottom: thin solid var(--text-color);
  }

  .share-button {
    display: flex;
    padding: 0.25rem;
    border: none;
    background-color: transparent;
    position: relative;
    z-index: 9;
  }

  .share-panel {
    position: absolute;
    right: 0;
    z-index: 8;

    border: thin solid var(--text-color);
    background-color: var(--background-color);
    border-radius: .5em;
    padding: .5em;
  }

  .share-input {
    display: flex;
    column-gap: 0.5rem;
  }

  input {
    flex-grow: 1;
  }

  label {
    display: flex;
    border-bottom: thin solid;
    font-style: italic;
    margin: 1rem 0 0.5rem 0;
  }

  .prefixed-input {
    flex-grow: 1;
    display: flex;
    text-wrap: nowrap;
  }
</style>
