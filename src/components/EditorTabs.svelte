<script>
  import Editor from "../components/Editor.svelte";

  const DEBOUNCE_DELAY = 750;

  let {
    ns = "",
    tabs = $bindable([]),
    newTab,
    active = 0,
    selected = $bindable(0),
    minTabs = 1,
    format = $bindable("json")
  } = $props();

  let editor = $state();

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

  const debounce = function (fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };
</script>

<div role="tablist">
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each tabs as tab, ndx}
  <div class="tab">
    <button role="tab" id={`${ns}-tab-${ndx}`}
         aria-selected={ndx === selected}
         aria-controls={`${ns}-tabpanel`}
         class:active={ndx === active}
         onclick={() => selectTab(ndx)}>
      <span class="tab-label">{tab.label}</span>
    </button>
    {#if !tab.persistent && tabs.length > minTabs}
    <button class="tab-close" onclick={() => removeTab(ndx)}>&times;</button>
    {/if}
  </div>
  {/each}
  {#if newTab}
  <button role="tab" id={`${ns}-tab-${tabs.length}`} class="tab" onclick={addTab}>
    <span class="tab-label">+</span>
  </button>
  {/if}
</div>
<div role="tabpanel" id={`${ns}-tabpanel`} aria-labelledby={`${ns}-tab-${selected}`}>
  <Editor bind:this={editor} value={tabs[selected].text} bind:format={format} oninput={debounce((value) => tabs[selected].text = value, DEBOUNCE_DELAY)} />
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

  .tab {
    border: var(--editor-border);
    border-radius: .5em .5em 0 0;
  }

  [role=tab] {
    position: relative;
    display: inline-block;
  }

  .tab:has([role=tab][aria-selected=true]) {
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

  .tab-close {
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
