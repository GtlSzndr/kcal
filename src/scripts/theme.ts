import type { ThemeMode } from '../types/index.ts';

const STORAGE_KEY = 'kcal_theme';

export function getStoredTheme(): ThemeMode {
  if (typeof localStorage === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'system';
}

export function getEffectiveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode !== 'system') return mode;
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function applyTheme(mode: ThemeMode): void {
  const effective = getEffectiveTheme(mode);
  document.documentElement.classList.toggle('dark', effective === 'dark');
  localStorage.setItem(STORAGE_KEY, mode);
}

export function cycleTheme(): ThemeMode {
  const current = getStoredTheme();
  const order: ThemeMode[] = ['system', 'light', 'dark'];
  const nextIndex = (order.indexOf(current) + 1) % order.length;
  const next = order[nextIndex] ?? 'system';
  applyTheme(next);
  return next;
}

export function initTheme(): void {
  const mode = getStoredTheme();
  applyTheme(mode);

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (getStoredTheme() === 'system') {
        applyTheme('system');
      }
    });
}
