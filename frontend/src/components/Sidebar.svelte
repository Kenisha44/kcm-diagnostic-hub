<script>
  import { currentPage } from "../stores/appStore";
  import { NAV_ITEMS, APP_NAME, APP_VERSION } from "../lib/constants";

  function navigate(pageId) {
    currentPage.set(pageId);
  }
</script>

<aside class="sidebar">
  <div class="brand">
    <h1>{APP_NAME}</h1>
    <p>v{APP_VERSION}</p>
  </div>

  <nav>
    {#each NAV_ITEMS as item}
      <button
        class:selected={$currentPage === item.id}
        on:click={() => navigate(item.id)}
      >
        <span>{item.icon}</span>
        <span>{item.label}</span>

        {#if item.premium}
          <small>PRO</small>
        {/if}
      </button>
    {/each}
  </nav>
</aside>

<style>
.sidebar {
  width: 260px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.brand {
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.brand h1 {
  margin: 0;
  font-size: 1.25rem;
}

.brand p {
  margin-top: 4px;
  color: #6b7280;
  font-size: .85rem;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
}

button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  font-size: .95rem;
  transition: .2s;
}

button:hover {
  background: #f3f4f6;
}

button.selected {
  background: #2563eb;
  color: white;
}

button small {
  margin-left: auto;
  background: gold;
  color: black;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: .65rem;
}
</style>