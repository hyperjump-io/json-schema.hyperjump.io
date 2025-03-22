<script lang="ts">
  import Editor from "./Editor.svelte";

  import type { Tab } from "./EditorTabs.d.ts";

  type Props = {
    ns?: string;
    tabs?: Tab[];
    format?: "json" | "yaml";
    newTab?: () => Tab;
    active?: number;
    selected?: number;
    minTabs?: number;
  };

  let {
    ns = "",
    tabs = $bindable([]),
    format = "json",
    newTab,
    active = 0,
    selected = $bindable(0),
    minTabs = 1
  }: Props = $props();

  const DEBOUNCE_DELAY = 750;

  let editor: Editor | undefined = $state();

  const selectTab = (id: number) => {
    selected = id;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    editor!.focus();
  };

  const addTab = () => {
    tabs[tabs.length] = newTab!();
    selected = tabs.length - 1;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    editor!.focus();
  };

  const removeTab = (id: number) => {
    if (selected >= id && selected > 0) {
      selected -= 1;
    }
    tabs.splice(id, 1);
    tabs = tabs;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    editor!.focus();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debounce = <Fn extends (...args: any[]) => any>(fn: Fn, delay: number) => {
    let timer: number;
    return (...args: Parameters<Fn>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
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
  <Editor bind:this={editor} value={tabs[selected].text} format={format} oninput={debounce((value: string) => tabs[selected].text = value, DEBOUNCE_DELAY)} />
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
