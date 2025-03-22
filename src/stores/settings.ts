import { writable } from "svelte/store";
import { browser } from "$app/environment"; // eslint-disable-line import/no-unresolved

import type { Writable } from "svelte/store";

type Settings = {
  indentSize: number;
  keepLines: boolean;
};

export let settings: Writable<Settings>;

if (browser) { // This guard is only needed for development
  const defaultSettings = {
    indentSize: 2,
    keepLines: false
  };
  const settingsJson = localStorage.getItem("settings");
  settings = writable(settingsJson ? JSON.parse(settingsJson) : defaultSettings) as Writable<Settings>;

  settings.subscribe((value) => {
    localStorage.settings = JSON.stringify(value);
  });
}
