import { writable } from "svelte/store";
import { browser } from "$app/environment";


export let settings;

if (browser) { // This guard is only needed for development
  const defaultSettings = {
    indentSize: 2,
    keepLines: false
  };
  settings = writable(localStorage.settings ? JSON.parse(localStorage.settings) : defaultSettings);

  settings.subscribe((value) => localStorage.settings = JSON.stringify(value));
}
