import { en } from "./i18n-en";
import { es } from "./i18n-es";
import type { IDictionary } from "./i18n-types";

export type { IDictionary };

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const dictionaries: Record<Locale, IDictionary> = { en, es };

export function getDictionary(locale: Locale): IDictionary {
  return dictionaries[locale];
}
