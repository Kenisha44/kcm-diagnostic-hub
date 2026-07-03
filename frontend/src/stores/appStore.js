import { writable } from "svelte/store";

/**
 * Global Application State
 */

export const currentPage = writable("dashboard");

export const sidebarOpen = writable(true);

export const appReady = writable(true);

/**
 * Future User State
 */

export const currentUser = writable(null);

/**
 * Future Theme Support
 */

export const currentTheme = writable("light");