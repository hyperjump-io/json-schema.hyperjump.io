<script lang="ts">
  import GearIcon from "./GearIcon.svelte";
  import { settings } from "../stores/settings.js";

  let isOpen = $state(false);

  const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

<div class="Settings">
  {#if isOpen}
  <div class="settings-form">
    <h2>Settings</h2>

    <label class="settings-label" for="indentSize">Indent Size:</label>
    <div class="settings-input"><input type="number" id="indentSize" min="0" max="8" bind:value={$settings.indentSize} style="width: 3em"></div>

    <label class="settings-label" for="keepLines">Keep Lines:</label>
    <div class="settings-input"><input type="checkbox" id="keepLines" bind:checked={$settings.keepLines}></div>
  </div>
  {/if}

  <button type="button" class="settings-button" aria-label="Settings" onclick={toggleOpen}>
    <GearIcon size="1.5rem" />
  </button>
</div>

<style>
  .Settings {
    position: relative;
  }

  h2 {
    margin: auto;
    margin-bottom: .5em;
    width: 100%;
    grid-column-end: span 2;
    border-bottom: thin solid var(--text-color);
  }

  .settings-button {
    border: none;
    background-color: transparent;
    padding: .5em;
    position: relative;
    z-index: 11;
  }

  .settings-form {
    position: absolute;
    right: 0;

    display: grid;
    grid-template-columns: auto 1fr;
    z-index: 10;

    border: thin solid var(--text-color);
    min-width: 12em;
    background-color: var(--background-color);
    border-radius: .5em;
    padding: .5em;
  }

  .settings-label {
    text-align: right;
    padding: .25em .5em .25em .5em;
  }

  .settings-input {
    display: flex;
    align-items: center;
  }
</style>
