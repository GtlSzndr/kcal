import type { Locale } from '../types/index.ts';
import type { TranslationKeys } from './translations/hu.ts';
import { hu } from './translations/hu.ts';
import { en } from './translations/en.ts';

const translations: Record<Locale, TranslationKeys> = { hu, en };

export function useTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const base = 'kcal';
  const afterBase = segments.indexOf(base) !== -1
    ? segments[segments.indexOf(base) + 1]
    : segments[0];

  if (afterBase === 'en') return 'en';
  return 'hu';
}

export function getLocalizedPath(locale: Locale, path: string = '/'): string {
  const base = '/kcal';
  const cleanPath = path === '/' ? '' : path;
  return `${base}/${locale}${cleanPath}`;
}
