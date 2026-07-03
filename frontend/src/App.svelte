<script>
  import LandingPage from "./features/landing/LandingPage.svelte";
  import AppShell from "./components/AppShell.svelte";
  import { DEV_VIEW } from "./lib/constants";
</script>

{#if DEV_VIEW === "landing"}
  <LandingPage />
{:else}
  <AppShell />
{/if}