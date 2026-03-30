export const hu = {
  meta: {
    title: 'Kalória Kalkulátor',
    description: 'Modern kalória kalkulátor az étkezéseid nyomon követéséhez',
  },
  header: {
    title: 'Kalória Kalkulátor',
    subtitle: 'Számold ki az ételeid kalóriatartalmát',
  },
  form: {
    ingredientName: 'Hozzávaló neve',
    weight: 'Súly (g)',
    kcalPer100g: 'Kcal / 100g',
    add: 'Hozzáadás',
  },
  table: {
    name: 'Név',
    grams: 'Gramm',
    kcalPer100g: 'Kcal/100g',
    kcal: 'Kcal',
    total: 'Összesen',
    remove: 'Törlés',
    empty: 'Még nincs hozzávaló. Adj hozzá egyet fent!',
  },
  result: {
    cookedWeight: 'Kész étel súlya (g)',
    calculate: 'Számolás',
    clear: 'Új étel',
    totalKcal: 'Összes kcal',
    per100g: 'Kcal / 100g',
  },
  history: {
    title: 'Előzmények',
    toggle: 'Előzmények',
    empty: 'Még nincsenek előzmények.',
    deleteDay: 'Nap törlése',
    deleteMeal: 'Étel törlése',
    clearAll: 'Összes törlése',
    ingredients: 'Hozzávalók',
    cookedWeight: 'Elkészült súly',
  },
  theme: {
    light: 'Világos',
    dark: 'Sötét',
    system: 'Rendszer',
    toggle: 'Téma váltása',
  },
  language: {
    switch: 'Nyelv váltása',
    hu: 'Magyar',
    en: 'English',
  },
  notFound: {
    title: '404 — Az oldal nem található',
    description: 'A keresett oldal nem létezik.',
    redirect: 'Átirányítás a főoldalra...',
    backHome: 'Vissza a főoldalra',
  },
  footer: {
    madeWith: 'Készült',
    forHealthyEating: 'az egészséges étkezésért',
  },
  toast: {
    ingredientAdded: 'Hozzávaló hozzáadva',
    calculated: 'Kalória kiszámolva',
    cleared: 'Új étel elkezdve',
    historyCleared: 'Előzmények törölve',
  },
} as const;

export type TranslationKeys = typeof hu;
