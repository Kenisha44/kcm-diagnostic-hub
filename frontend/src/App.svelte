<script>
  import { diagnosticQuestions, getRecommendedLevel } from './diagnosticData.js';

  let screen = 'home';
  let current = 0;
  let answers = {};
  let studentName = '';
  let studentEmail = '';
  let result = null;
  let assistProblem = '';
  let assistMode = 'hint';
  let assistAnswer = '';
  let assistLoading = false;
  let assistError = '';

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

  $: progress = Math.round((Object.keys(answers).length / diagnosticQuestions.length) * 100);

  function startDiagnostic() {
    screen = 'diagnostic';
    current = 0;
    answers = {};
    result = null;
  }

  function choose(choice) {
    answers = { ...answers, [diagnosticQuestions[current].id]: choice };
  }

  function nextQuestion() {
    if (current < diagnosticQuestions.length - 1) current += 1;
    else finishDiagnostic();
  }

  function previousQuestion() {
    if (current > 0) current -= 1;
  }

  function finishDiagnostic() {
    let correct = 0;
    const skillStats = {};
    const missed = [];

    diagnosticQuestions.forEach((q) => {
      if (!skillStats[q.skill]) skillStats[q.skill] = { correct: 0, total: 0 };
      skillStats[q.skill].total += 1;
      if (answers[q.id] === q.answer) {
        correct += 1;
        skillStats[q.skill].correct += 1;
      } else {
        missed.push(q);
      }
    });

    const score = Math.round((correct / diagnosticQuestions.length) * 100);
    const strengths = Object.entries(skillStats)
      .filter(([, v]) => v.correct / v.total >= 0.8)
      .map(([skill]) => skill);
    const needsWork = Object.entries(skillStats)
      .filter(([, v]) => v.correct / v.total < 0.8)
      .map(([skill]) => skill);

    result = {
      correct,
      total: diagnosticQuestions.length,
      score,
      skillStats,
      strengths,
      needsWork,
      missed,
      recommendedLevel: getRecommendedLevel(score)
    };
    screen = 'results';
  }

  function setAssistFromMissed(question) {
    assistProblem = `${question.question}\nStudent chose: ${answers[question.id] || 'No answer'}\nCorrect answer: ${question.answer}`;
    screen = 'mathAssist';
  }

  async function askMathAssist() {
    assistLoading = true;
    assistError = '';
    assistAnswer = '';
    try {
      const response = await fetch(`${API_BASE}/solve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problem: assistProblem,
          mode: assistMode,
          student_level: result?.recommendedLevel || 'middle school / early algebra'
        })
      });
      if (!response.ok) throw new Error('Math Assist request failed.');
      const data = await response.json();
      assistAnswer = data.answer;
    } catch (err) {
      assistError = 'Could not reach the backend. Make sure FastAPI is running on localhost:8000.';
    } finally {
      assistLoading = false;
    }
  }

  function resetAll() {
    screen = 'home';
    current = 0;
    answers = {};
    result = null;
    assistAnswer = '';
    assistProblem = '';
  }
</script>

<main class="app-shell">
  <nav class="topbar">
    <div>
      <p class="eyebrow">Keni Can Math</p>
      <h1>KCM Diagnostic Hub</h1>
    </div>
    <div class="nav-actions">
      <button class="ghost" on:click={() => (screen = 'brainBoost')}>BrainBoost</button>
      <button class="ghost" on:click={() => (screen = 'mathAssist')}>Math Assist</button>
    </div>
  </nav>

  {#if screen === 'home'}
    <section class="hero card">
      <div>
        <p class="pill">Diagnostic • BrainBoost • Math Assist</p>
        <h2>Find the student’s math level in under 10 minutes.</h2>
        <p class="subcopy">Students answer 20 questions, get a skill report, then move into daily practice or step-by-step help.</p>
        <div class="form-row">
          <input bind:value={studentName} placeholder="Student name (optional)" />
          <input bind:value={studentEmail} placeholder="Email for report (optional)" />
        </div>
        <button class="primary" on:click={startDiagnostic}>Start Diagnostic</button>
      </div>
      <div class="mini-dashboard">
        <h3>Sample Report</h3>
        <p><strong>Level:</strong> Pre-Algebra Strengthening</p>
        <p><strong>Needs work:</strong> Fractions, Ratios, Equations</p>
        <p><strong>Next step:</strong> 7-day BrainBoost plan</p>
      </div>
    </section>
  {/if}

  {#if screen === 'diagnostic'}
    {@const q = diagnosticQuestions[current]}
    <section class="card question-card">
      <div class="progress-wrap">
        <span>Question {current + 1} of {diagnosticQuestions.length}</span>
        <span>{progress}% complete</span>
      </div>
      <div class="progress"><div style={`width: ${progress}%`}></div></div>
      <p class="pill">{q.skill} • {q.level}</p>
      <h2>{q.question}</h2>
      <div class="choices">
        {#each q.choices as choice}
          <button class:active={answers[q.id] === choice} on:click={() => choose(choice)}>{choice}</button>
        {/each}
      </div>
      <div class="question-actions">
        <button class="ghost" on:click={previousQuestion} disabled={current === 0}>Back</button>
        <button class="primary" on:click={nextQuestion} disabled={!answers[q.id]}>{current === diagnosticQuestions.length - 1 ? 'Finish' : 'Next'}</button>
      </div>
    </section>
  {/if}

  {#if screen === 'results' && result}
    <section class="grid-two">
      <div class="card score-card">
        <p class="eyebrow">Diagnostic Result</p>
        <h2>{result.score}%</h2>
        <p>{result.correct} out of {result.total} correct</p>
        <h3>{result.recommendedLevel}</h3>
        <button class="primary" on:click={() => (screen = 'brainBoost')}>Start BrainBoost Plan</button>
        <button class="secondary" on:click={() => (screen = 'mathAssist')}>Ask Math Assist</button>
      </div>
      <div class="card">
        <h3>Skill Breakdown</h3>
        {#each Object.entries(result.skillStats) as [skill, stat]}
          {@const percent = Math.round((stat.correct / stat.total) * 100)}
          <div class="skill-row">
            <span>{skill}</span>
            <strong>{percent}%</strong>
          </div>
          <div class="progress small"><div style={`width: ${percent}%`}></div></div>
        {/each}
      </div>
    </section>

    <section class="card">
      <h3>Recommended Learning Path</h3>
      <div class="path">
        <span>Foundation Review</span><span>Fractions</span><span>Ratios</span><span>Equations</span><span>Graphs</span>
      </div>
      <h3>Missed Questions</h3>
      <div class="missed-list">
        {#each result.missed as missed}
          <article>
            <strong>{missed.skill}</strong>
            <p>{missed.question}</p>
            <small>Correct: {missed.answer}</small>
            <button class="ghost" on:click={() => setAssistFromMissed(missed)}>Explain with Math Assist</button>
          </article>
        {/each}
      </div>
      <button class="ghost" on:click={resetAll}>Start Over</button>
    </section>
  {/if}

  {#if screen === 'brainBoost'}
    <section class="card">
      <p class="eyebrow">BrainBoost Preview</p>
      <h2>Daily practice plan based on weak skills.</h2>
      <p class="subcopy">This MVP includes a built-in BrainBoost preview. Later, you can connect this to the Chrome extension or convert it into an in-app daily practice dashboard.</p>
      <div class="boost-grid">
        {#each (result?.needsWork?.length ? result.needsWork : ['Fractions', 'Equations', 'Percents']) as skill, i}
          <article>
            <p class="pill">Day {i + 1}</p>
            <h3>{skill}</h3>
            <p>Complete 5 practice questions and review one mistake.</p>
          </article>
        {/each}
      </div>
      <button class="secondary" on:click={() => (screen = result ? 'results' : 'home')}>Back</button>
    </section>
  {/if}

  {#if screen === 'mathAssist'}
    <section class="card">
      <p class="eyebrow">Math Assist</p>
      <h2>Get a hint, full solution, or simple explanation.</h2>
      <textarea bind:value={assistProblem} placeholder="Paste a math problem here..."></textarea>
      <div class="form-row">
        <select bind:value={assistMode}>
          <option value="hint">Hint Mode</option>
          <option value="full_solution">Full Solution</option>
          <option value="simple_explanation">Simple Explanation</option>
        </select>
        <button class="primary" on:click={askMathAssist} disabled={assistLoading || !assistProblem.trim()}>{assistLoading ? 'Thinking...' : 'Ask Math Assist'}</button>
      </div>
      {#if assistError}<p class="error">{assistError}</p>{/if}
      {#if assistAnswer}<pre class="answer">{assistAnswer}</pre>{/if}
      <button class="secondary" on:click={() => (screen = result ? 'results' : 'home')}>Back</button>
    </section>
  {/if}
</main>
