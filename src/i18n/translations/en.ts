import type { TranslationKeys } from './hu.ts';

export const en: TranslationKeys = {
  meta: {
    title: 'Calorie Calculator',
    description: 'A modern calorie calculator to track your meals',
  },
  header: {
    title: 'Calorie Calculator',
    subtitle: 'Calculate the calorie content of your meals',
  },
  form: {
    ingredientName: 'Ingredient name',
    weight: 'Weight (g)',
    kcalPer100g: 'Kcal / 100g',
    add: 'Add',
  },
  table: {
    name: 'Name',
    grams: 'Grams',
    kcalPer100g: 'Kcal/100g',
    kcal: 'Kcal',
    total: 'Total',
    remove: 'Remove',
    empty: 'No ingredients yet. Add one above!',
  },
  result: {
    cookedWeight: 'Cooked weight (g)',
    calculate: 'Calculate',
    clear: 'New meal',
    totalKcal: 'Total kcal',
    per100g: 'Kcal / 100g',
  },
  history: {
    title: 'History',
    toggle: 'History',
    empty: 'No history yet.',
    deleteDay: 'Delete day',
    deleteMeal: 'Delete meal',
    clearAll: 'Clear all',
    ingredients: 'Ingredients',
    cookedWeight: 'Cooked weight',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    toggle: 'Toggle theme',
  },
  language: {
    switch: 'Switch language',
    hu: 'Magyar',
    en: 'English',
  },
  notFound: {
    title: '404 — Page not found',
    description: 'The page you are looking for does not exist.',
    redirect: 'Redirecting to home...',
    backHome: 'Back to home',
  },
  footer: {
    madeWith: 'Made with',
    forHealthyEating: 'for healthy eating',
  },
  toast: {
    ingredientAdded: 'Ingredient added',
    calculated: 'Calories calculated',
    cleared: 'New meal started',
    historyCleared: 'History cleared',
  },
} as const;
