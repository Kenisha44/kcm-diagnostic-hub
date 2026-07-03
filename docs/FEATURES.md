# KCM Features

## App Shell

### Purpose

The App Shell provides the main layout for the KCM Learning Hub.

### Includes

- Sidebar navigation
- Header
- Main content area
- Active feature state
- Placeholder feature views

### Navigation Items

- Dashboard
- Diagnostic
- BrainBoost
- Math Assist
- Practice
- Progress
- Upgrade

### Future Enhancements

- User profile menu
- Mobile bottom navigation
- Notifications
- Theme toggle
- Authentication-aware navigation
### App State

The App Shell uses a centralized Svelte store to manage:

- Current page
- Sidebar state
- Future authentication
- Theme preferences

This keeps components lightweight and avoids duplicated state across the application.

## Sidebar

Purpose

Provides persistent navigation throughout the KCM Learning Hub.

Responsibilities

- Display application branding
- Display feature navigation
- Highlight active page
- Display Premium features
- Update current page state

## App Shell

Responsibilities

- Persistent Sidebar
- Persistent Header
- Shared layout
- Render active feature
- Prepare for future routing

## Header

Purpose

Displays the active feature and global application controls.

Responsibilities

- Display current page title
- Display application subtitle
- Future notification center
- Future settings menu
- Future user profile