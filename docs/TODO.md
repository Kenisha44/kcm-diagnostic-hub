# KCM Current Sprint

## KCM-002 — App Shell

**Status:** In Progress  
**Priority:** Critical  
**Estimated Time:** 2–3 hours  
**Sprint:** July V1 Foundation  

### Goal

Create the main KCM Learning Hub layout so every feature lives inside one consistent app experience.

### Files

- `frontend/src/App.svelte`
- `frontend/src/components/AppShell.svelte`
- `frontend/src/components/Sidebar.svelte`
- `frontend/src/components/Header.svelte`
- `frontend/src/stores/appStore.js`
- `frontend/src/lib/constants.js`

### Tasks

- [ ] Create app navigation structure
- [ ] Build sidebar component
- [ ] Build header component
- [ ] Build app shell layout
- [ ] Connect selected page state
- [ ] Render placeholder content for each feature
- [ ] Confirm app still runs
- [ ] Confirm no console errors

### Acceptance Criteria

- [ ] Sidebar appears
- [ ] Header appears
- [ ] Main content area appears
- [ ] Navigation items are visible
- [ ] Clicking nav items changes active section
- [ ] App compiles successfully
- [ ] Existing app is not broken

### Commit Message

```bash
git commit -m "feat(shell): create KCM app shell"