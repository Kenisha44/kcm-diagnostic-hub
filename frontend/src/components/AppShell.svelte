<script>
  import Sidebar from "./Sidebar.svelte";
  import Header from "./Header.svelte";
  import FeatureRenderer from "./router/FeatureRenderer.svelte";
</script>

<div class="layout">
  <Sidebar />

  <main class="content">
    <Header />

    <section class="page">
      <FeatureRenderer />
    </section>
  </main>
</div>

<style>
.layout {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page {
  padding: 32px;
}
</style>