import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import homeEN from "./Translations/en/homeEN.json"
import homePL from "./Translations/pl/homePL.json"


const resources = {
  en: {
    translation: homeEN
  },
  pl: {
    translation: homePL
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    useSuspense: false,
    resources,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["localStorage", "queryString", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/Translations/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
