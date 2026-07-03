<script>
  import { currentPage } from "../stores/appStore";

  const pageTitles = {
    dashboard: "Dashboard",
    diagnostic: "Diagnostic",
    brainboost: "BrainBoost",
    mathAssist: "Math Assist",
    practice: "Practice Generator",
    progress: "Progress",
    upgrade: "Upgrade to Premium"
  };

  $: title = pageTitles[$currentPage] ?? "KCM Learning Hub";
</script>

<header class="header">
  <div>
    <h1>{title}</h1>
    <p>Welcome to KCM Learning Hub</p>
  </div>

  <div class="actions">
    <button>🔔</button>
    <button>⚙️</button>
  </div>
</header>

<style>
.header {
  height: 72px;
  background: white;
  border-bottom: 1px solid #e5e7eb;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.header p {
  margin: 4px 0 0;
  color: #6b7280;
  font-size: .9rem;
}

.actions {
  display: flex;
  gap: 12px;
}

.actions button {
  width: 42px;
  height: 42px;

  border-radius: 10px;
  border: 1px solid #d1d5db;

  background: white;

  cursor: pointer;

  font-size: 1rem;
}

.actions button:hover {
  background: #f3f4f6;
}
</style>