<script>
  import { createEventDispatcher } from  "svelte";
  import Editor from "../components/Editor.svelte";


  export let tabs = [];
  export let newTab = undefined;
  export let active = 0;
  export let selected = 0;
  export let minTabs = 1;

  const dispatch = createEventDispatcher();

  function selectTab(id) {
    selected = id;
  }

  function addTab() {
    tabs[tabs.length] = newTab();
    selected = tabs.length - 1;
  }

  function removeTab(id) {
    if (selected >= id && selected > 0) {
      selected -= 1;
    }
    tabs.splice(id, 1);
    tabs = tabs;
  }
</script>

<div class="tabs">
  {#each tabs as tab, ndx}
  <div class="tab" class:selected={ndx === selected} class:active={ndx === active}>
    <span class="label" on:click={() => selectTab(ndx)}>{tab.label}</span>
    {#if !tab.persistent && tabs.length > minTabs}
    <span class="close" on:click={() => removeTab(ndx)}>&times;</span>
    {/if}
  </div>
  {/each}
  {#if newTab}
  <div class="tab" on:click={addTab}>
    <span class="label">+</span>
  </div>
  {/if}
</div>
<Editor bind:value={tabs[selected].text} on:input={(event) => dispatch("input", tabs)} />

<style>
  .tabs {
    display: flex;
    flex-wrap: wrap;
  }

  .tabs::after {
    content: "";
    display: inline-block;
    flex-grow: 1;
    border-bottom: var(--editor-border);
  }

  .tab {
    position: relative;
    display: inline-block;
    border: var(--editor-border);
    border-radius: .5em .5em 0 0;
  }

  .tab.selected {
    border-bottom: none;
  }

  .tab.active {
    font-weight: bold;
  }

  .tab .label {
    display: inline-block;
    padding: .25em .25em;
    cursor: pointer;
  }

  .tab .close {
    display: inline-block;
    padding: .25em .25em .25em 0;
    cursor: pointer;
  }
</style>
