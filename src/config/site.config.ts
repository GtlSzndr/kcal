import type { SiteConfig } from '../types/index.ts';

export const siteConfig: SiteConfig = {
  site: {
    url: 'https://gtlszndr.github.io',
    base: '/kcal',
    title: 'Kcal Calculator',
    description: 'A modern calorie calculator for tracking your meals',
  },
  features: {
    history: true,
    ingredientDatabase: true,
    darkModeToggle: true,
    languageSwitcher: true,
  },
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
  },
  seo: {
    openGraph: true,
    twitterCards: true,
    structuredData: true,
    sitemap: true,
  },
} as const;
