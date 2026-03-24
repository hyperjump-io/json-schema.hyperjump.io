<script lang="ts">
  let { size = "1.25rem" } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" />
  <polyline points="16 6 12 2 8 6" fill="none" />
  <line x1="12" y1="2" x2="12" y2="15" fill="none" />
</svg>
