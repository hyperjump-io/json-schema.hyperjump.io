<script>
  import Select from "svelte-select";
  import { onMount } from "svelte";


  let mode;
  let theme;
  let themes = [
    { value: "solarized", label: "Solarized" },
    { value: "atom-one", label: "Atom One" }
  ];

  onMount(async () => {
    mode = localStorage.mode || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    theme = localStorage.theme || "solarized";

    // Listen for default mode changes
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      if (localStorage.mode) {
        return;
      }
      mode = event.matches ? "dark" : "light";
    });
  });

  const toggleMode = () => {
    mode = mode === "dark" ? "light" : "dark";
    localStorage.mode = mode;

    document.getElementById("theme").href = `${theme.value}-${mode}.css`;
  };

  const setTheme = (event) => {
    theme = event.detail.value;
    localStorage.theme = theme;

    document.getElementById("theme").href = `${theme}-${mode}.css`;
  };
</script>

<div class="ThemeSelector">
  {#if mode}
  <button class="dark-mode-toggle" on:click={toggleMode}>
    {#if mode === "dark"}
      <svg viewBox="0 0 122.88 122.89">
        <title>Dark Mode</title>
        <path d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z"/>
      </svg>
    {:else if mode === "light"}
      <svg viewBox="0 0 122.88 122.88">
        <title>Light Mode</title>
        <path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/>
      </svg>
    {/if}
  </button>
  {/if}

  {#if theme}
  <Select class="theme-selector"
          bind:value={theme}
          on:change={setTheme}
          items={themes}
          showChevron
          clearable={false}
          searchable={false}
  />
  {/if}
</div>

<style>
  .ThemeSelector {
    position: absolute;
    margin: 1em;
    left: 0;
    display: flex;
  }

  .dark-mode-toggle {
    width: 2em;
    height: 2em;
    margin: .25em;
    padding: 0;
    border: none;
  }

  svg {
    height: 2em;
    width: 2em;
  }

  :global(.theme-selector) {
    height: 2.25em;

    --font-size: 1em;
    --height: 100%;

    --chevron-width: 100%;
    --chevron-icon-width: 1em;

    --item-padding: .5em;
    --padding: 0 .5em 0 .5em;

    --background: var(--background-color);
    --list-background: var(--background-color);
    --item-hover-bg: var(--line-focus-background-color);
    --selected-item-bg: var(--line-focus-background-color);
    --item-is-active-bg: var(--line-focus-background-color);

    --border: thin solid var(--text-color);
    --border-focused: thin solid var(--text-color);
    --list-border: thin solid var(--text-color);
  }

  :global(.theme-selector.focused) {
    background-color: var(--line-focus-background-color)!important;
  }
</style>
