<script lang="ts">
  type Props = {
    format: "json" | "yaml";
    onclick: () => void;
  };

  let {
    format = $bindable("json"),
    onclick = () => {}
  }: Props = $props();

  const handleJson = () => {
    format = "json";
    onclick();
  };

  const handleYaml = () => {
    format = "yaml";
    onclick();
  };
</script>

<div class="Format">
  <button class={format === "json" ? "selected" : ""} onclick={handleJson}>JSON</button>
  <button class={format === "yaml" ? "selected" : ""} onclick={handleYaml}>YAML</button>
</div>

<style>
  .Format {
    display: flex;
  }

  .Format :first-child {
    border-radius: .25em 0 0 .25em;
  }

  .Format :last-child {
    border-radius: 0 .25em .25em 0;
  }

  .Format button:hover {
    opacity: 100%;
  }

  .Format :not(.selected) {
    opacity: 50%;
  }
</style>
