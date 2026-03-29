<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { notifications, dismissNotification } from "../stores/notifications.svelte.js";
</script>

{#if notifications.length > 0}
  <div class="toast-container" aria-live="polite">
    {#each notifications as notification (notification.id)}
      <div
        class="toast toast-{notification.type}"
        role="alert"
        transition:fly={{ y: -30, duration: 300 }}
      >
        <span class="toast-icon">
          {#if notification.type === "error"}✕
          {:else if notification.type === "warning"}⚠
          {:else}ℹ
          {/if}
        </span>
        <span class="toast-message">{notification.message}</span>
        <button
          class="toast-dismiss"
          aria-label="Dismiss notification"
          onclick={() => dismissNotification(notification.id)}
        >×</button>
      </div>
    {/each}
  </div>
{/if}

<style>
  .toast-container {
    position: fixed;
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    pointer-events: none;
    max-width: 90vw;
  }

  .toast {
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.6em 1em;
    border-radius: 0.5em;
    font-size: 0.9em;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .toast-warning {
    background-color: rgba(255, 170, 30, 0.85);
    color: #1a1a1a;
  }

  .toast-error {
    background-color: rgba(220, 50, 50, 0.85);
    color: #fff;
  }

  .toast-info {
    background-color: rgba(50, 140, 220, 0.85);
    color: #fff;
  }

  .toast-icon {
    flex-shrink: 0;
    font-weight: bold;
    font-size: 1.1em;
  }

  .toast-message {
    flex-grow: 1;
    line-height: 1.3;
  }

  .toast-dismiss {
    flex-shrink: 0;
    background: none;
    border: none;
    color: inherit;
    font-size: 1.2em;
    cursor: pointer;
    padding: 0 0.2em;
    opacity: 0.7;
    line-height: 1;
  }

  .toast-dismiss:hover {
    opacity: 1;
  }
</style>
