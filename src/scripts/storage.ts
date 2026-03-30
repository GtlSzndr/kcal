import type {
  HistoryRecord,
  IngredientDatabase,
  Meal,
} from '../types/index.ts';

const STORAGE_KEYS = {
  history: 'kcal_history',
  database: 'kcal_db',
} as const;

function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function getHistory(): HistoryRecord {
  return safeJsonParse<HistoryRecord>(
    localStorage.getItem(STORAGE_KEYS.history),
    {},
  );
}

export function saveHistory(history: HistoryRecord): void {
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history));
}

export function addMealToHistory(meal: Meal): HistoryRecord {
  const history = getHistory();
  const day = meal.timestamp.split('T')[0] ?? '';
  const existing = history[day] ?? [];

  const updated: HistoryRecord = {
    ...history,
    [day]: [...existing, meal],
  };

  saveHistory(updated);
  return updated;
}

export function deleteDayFromHistory(day: string): HistoryRecord {
  const history = getHistory();
  const { [day]: _, ...rest } = history;
  void _;
  saveHistory(rest);
  return rest;
}

export function deleteMealFromHistory(
  day: string,
  mealIndex: number,
): HistoryRecord {
  const history = getHistory();
  const meals = history[day];
  if (!meals) return history;

  const updated = meals.filter((_, i) => i !== mealIndex);

  if (updated.length === 0) {
    return deleteDayFromHistory(day);
  }

  const newHistory: HistoryRecord = { ...history, [day]: updated };
  saveHistory(newHistory);
  return newHistory;
}

export function clearHistory(): void {
  localStorage.removeItem(STORAGE_KEYS.history);
}

export function getIngredientDatabase(): IngredientDatabase {
  return safeJsonParse<IngredientDatabase>(
    localStorage.getItem(STORAGE_KEYS.database),
    {},
  );
}

export function saveIngredientToDatabase(
  name: string,
  kcalPer100g: number,
): void {
  const db = getIngredientDatabase();
  db[name.toLowerCase()] = kcalPer100g;
  localStorage.setItem(STORAGE_KEYS.database, JSON.stringify(db));
}

export function lookupIngredient(name: string): number | undefined {
  const db = getIngredientDatabase();
  return db[name.toLowerCase()];
}
