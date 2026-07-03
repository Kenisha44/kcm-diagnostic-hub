<script>
  import { currentPage } from "../../stores/appStore";

  import Dashboard from "../../features/dashboard/Dashboard.svelte";
  import Diagnostic from "../../features/diagnostic/Diagnostic.svelte";
  import BrainBoost from "../../features/brainboost/BrainBoost.svelte";
  import MathAssist from "../../features/math-assist/MathAssist.svelte";
  import PracticeGenerator from "../../features/practice/PracticeGenerator.svelte";
  import Progress from "../../features/progress/Progress.svelte";

  const featureMap = {
    dashboard: Dashboard,
    diagnostic: Diagnostic,
    brainboost: BrainBoost,
    mathAssist: MathAssist,
    practice: PracticeGenerator,
    progress: Progress
  };

  $: ActiveFeature = featureMap[$currentPage] ?? Dashboard;
</script>

<svelte:component this={ActiveFeature} />