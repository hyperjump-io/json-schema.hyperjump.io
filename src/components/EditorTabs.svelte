<script>
  import { createEventDispatcher } from "svelte";
  import Editor from "../components/Editor.svelte";

  export let ns = "";
  export let tabs = [];
  export let newTab;
  export let active = 0;
  export let selected = 0;
  export let minTabs = 1;
  export let format = "json";

  let editor;

  const dispatch = createEventDispatcher();

  function selectTab(id) {
    selected = id;
    editor.focus();
  }

  function addTab() {
    tabs[tabs.length] = newTab();
    selected = tabs.length - 1;
    editor.focus();
  }

  function removeTab(id) {
    if (selected >= id && selected > 0) {
      selected -= 1;
    }
    tabs.splice(id, 1);
    tabs = tabs;
    editor.focus();
  }
</script>

<div role="tablist">
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each tabs as tab, ndx}
  <button role="tab" id={`${ns}-tab-${ndx}`}
       aria-selected={ndx === selected}
       aria-controls={`${ns}-tabpanel`}
       class:active={ndx === active}
       on:click={() => selectTab(ndx)}>
    <span class="tab-label">{tab.label}</span>
    {#if !tab.persistent && tabs.length > minTabs}
    <button class="tab-close" on:click={() => removeTab(ndx)}>&times;</button>
    {/if}
  </button>
  {/each}
  {#if newTab}
  <button role="tab" id={`${ns}-tab-${tabs.length}`} on:click={addTab}>
    <span class="tab-label">+</span>
  </button>
  {/if}
</div>
<div role="tabpanel" id={`${ns}-tabpanel`} aria-labelledby={`${ns}-tab-${selected}`}>
  <Editor bind:this={editor} bind:value={tabs[selected].text} bind:format={format} on:input={() => dispatch("input", tabs)} />
</div>

<style>
  button {
    background-color: inherit;
    color: inherit;
    padding: 0;
    margin: 0;
    font: inherit;
    border: none;
  }

  [role=tablist] {
    display: flex;
    flex-wrap: wrap;
  }

  [role=tablist]::after {
    content: "";
    display: inline-block;
    flex-grow: 1;
    border-bottom: var(--editor-border);
  }

  [role=tab] {
    position: relative;
    display: inline-block;
    border: var(--editor-border);
    border-radius: .5em .5em 0 0;
  }

  [role=tab][aria-selected=true] {
    border-bottom: none;
  }

  [role=tab].active {
    font-weight: bold;
  }

  [role=tab] .tab-label {
    display: inline-block;
    padding: .25em .25em;
    cursor: pointer;
  }

  [role=tab] .tab-close {
    display: inline-block;
    padding: .25em .25em .25em 0;
    cursor: pointer;
  }

  [role=tabpanel] {
    display: flex;
    overflow: hidden;
    flex-grow: 1;
    height: 100%;
  }
</style>
