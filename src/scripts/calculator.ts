import type { Ingredient, Meal } from '../types/index.ts';

export function calculateIngredientKcal(ingredient: Ingredient): number {
  return (ingredient.grams * ingredient.kcalPer100g) / 100;
}

export function calculateTotalKcal(ingredients: readonly Ingredient[]): number {
  return ingredients.reduce(
    (sum, ingredient) => sum + calculateIngredientKcal(ingredient),
    0,
  );
}

export function calculateKcalPer100g(
  totalKcal: number,
  cookedWeightGrams: number,
): number {
  if (cookedWeightGrams <= 0) return 0;
  return (totalKcal / cookedWeightGrams) * 100;
}

export function createMeal(
  ingredients: readonly Ingredient[],
  cookedWeightGrams: number,
): Meal {
  const totalKcal = calculateTotalKcal(ingredients);
  const kcalPer100g = calculateKcalPer100g(totalKcal, cookedWeightGrams);

  return {
    ingredients,
    cookedWeightGrams,
    totalKcal,
    kcalPer100g,
    timestamp: new Date().toISOString(),
  };
}

export function formatNumber(value: number, decimals: number = 1): string {
  return value.toFixed(decimals);
}
