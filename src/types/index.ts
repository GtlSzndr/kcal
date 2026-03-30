export type Locale = 'hu' | 'en';

export interface Ingredient {
  readonly name: string;
  readonly grams: number;
  readonly kcalPer100g: number;
}

export interface Meal {
  readonly ingredients: readonly Ingredient[];
  readonly cookedWeightGrams: number;
  readonly totalKcal: number;
  readonly kcalPer100g: number;
  readonly timestamp: string;
}

export type HistoryRecord = Record<string, readonly Meal[]>;

export type IngredientDatabase = Record<string, number>;

export interface SiteConfig {
  readonly site: {
    readonly url: string;
    readonly base: string;
    readonly title: string;
    readonly description: string;
  };
  readonly features: {
    readonly history: boolean;
    readonly ingredientDatabase: boolean;
    readonly darkModeToggle: boolean;
    readonly languageSwitcher: boolean;
  };
  readonly i18n: {
    readonly defaultLocale: Locale;
    readonly locales: readonly Locale[];
  };
  readonly seo: {
    readonly openGraph: boolean;
    readonly twitterCards: boolean;
    readonly structuredData: boolean;
    readonly sitemap: boolean;
  };
}

export interface SEOProps {
  readonly title: string;
  readonly description: string;
  readonly locale: Locale;
  readonly canonicalUrl?: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean;
}

export type ThemeMode = 'light' | 'dark' | 'system';
