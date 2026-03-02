import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import sv from "./locales/sv.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import es from "./locales/es.json";
import no from "./locales/no.json";
import da from "./locales/da.json";

export const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧", hreflang: "en" },
  { code: "sv", name: "Svenska", flag: "🇸🇪", hreflang: "sv" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", hreflang: "de" },
  { code: "fr", name: "Français", flag: "🇫🇷", hreflang: "fr" },
  { code: "it", name: "Italiano", flag: "🇮🇹", hreflang: "it" },
  { code: "es", name: "Español", flag: "🇪🇸", hreflang: "es" },
  { code: "no", name: "Norsk", flag: "🇳🇴", hreflang: "no" },
  { code: "da", name: "Dansk", flag: "🇩🇰", hreflang: "da" },
] as const;

export const DEFAULT_LANGUAGE = "en";

export const SUPPORTED_LANGUAGE_CODES = SUPPORTED_LANGUAGES.map((l) => l.code);

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGE_CODES)[number];

export function isSupported(code: string): code is SupportedLanguage {
  return SUPPORTED_LANGUAGE_CODES.includes(code as SupportedLanguage);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, sv: { translation: sv }, de: { translation: de }, fr: { translation: fr }, it: { translation: it }, es: { translation: es }, no: { translation: no }, da: { translation: da } },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGE_CODES,
    interpolation: { escapeValue: false },
    detection: {
      // Don't auto-detect on init — we control language via URL
      order: [],
      caches: [],
    },
  });

export default i18n;
