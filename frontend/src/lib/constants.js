// Application Information
export const APP_NAME = "KCM Learning Hub";
export const APP_VERSION = "0.2.0";

// Navigation Items
export const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "🏠",
    premium: false,
  },
  {
    id: "diagnostic",
    label: "Diagnostic",
    icon: "📊",
    premium: false,
  },
  {
    id: "brainboost",
    label: "BrainBoost",
    icon: "🧠",
    premium: false,
  },
  {
    id: "mathAssist",
    label: "Math Assist",
    icon: "➗",
    premium: false,
  },
  {
    id: "practice",
    label: "Practice",
    icon: "📝",
    premium: false,
  },
  {
    id: "progress",
    label: "Progress",
    icon: "📈",
    premium: false,
  },
  {
    id: "upgrade",
    label: "Upgrade",
    icon: "⭐",
    premium: true,
  },
];

// Dashboard Placeholder Cards
export const DASHBOARD_CARDS = [
  {
    title: "Overall Mastery",
    value: "0%",
    icon: "🎯",
  },
  {
    title: "Practice Completed",
    value: "0",
    icon: "📝",
  },
  {
    title: "Current Streak",
    value: "0 Days",
    icon: "🔥",
  },
];

/**
 * Development
 * Toggle between the public landing page
 * and the student application.
 */

export const DEV_VIEW = "student";

// Options:
//
// "landing"
// "student"