<script>
  import Editor from "../components/Editor.svelte";


  export let tabs = [];
  export let newTab;

  let selectedTab = 0;

  function selectTab(id) {
    selectedTab = id;
  }

  function addTab() {
    tabs[tabs.length] = newTab();
    selectedTab = tabs.length - 1;
  }

  function removeTab(id) {
    if (selectedTab >= id && selectedTab > 0) {
      selectedTab -= 1;
    }
    tabs.splice(id, 1);
    tabs = tabs;
  }
</script>

<div class="tabs">
  {#each tabs as tab, ndx}
  <div class="tab" class:active={ndx === selectedTab}>
    <span class="label" on:click={() => selectTab(ndx)}>{tab.label}</span>
    {#if ndx !== 0}
    <span class="close" on:click={() => removeTab(ndx)}>&times;</span>
    {/if}
  </div>
  {/each}
  <div class="tab" on:click={addTab}>
    <span class="label">+</span>
  </div>
</div>
<Editor bind:value={tabs[selectedTab].text} />

<style>
  .tab {
    position: relative;
    display: inline-block;
    border: thin solid;
    bottom: -1px;
    border-radius: .5em .5em 0 0;
  }

  .tab.active {
    border-bottom: thin solid var(--background-color);
  }

  .tab .label {
    display: inline-block;
    padding: .5em;
    cursor: pointer;
  }

  .tab .close {
    display: inline-block;
    padding: .5em .5em .5em 0;
    cursor: pointer;
  }

  :global(.Editor) {
    padding: .5em;
    resize: none;
  }
</style>
