import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import homeEN from "./Translations/en/homeEN.json";
import homePL from "./Translations/pl/homePL.json";
import aboutUsEN from "./Translations/en/aboutUsEN.json";
import aboutUsPL from "./Translations/pl/aboutUsPL.json";
import contactEN from "./Translations/en/contactEN.json"
import contactPL from "./Translations/pl/contactPL.json"
import navbarEN from "./Translations/en/navbarEN.json"
import navbarPL from "./Translations/pl/navbarPL.json"
import settingsEN from "./Translations/en/settingsEN.json"
import settingsPL from "./Translations/pl/settingsPL.json"


const resources = {
  en: {
    translation: {
      ...homeEN,
      ...aboutUsEN,
      ...contactEN,
      ...navbarEN,
      ...settingsEN
    }
  },
  pl: {
    translation: {
      ...homePL,
      ...aboutUsPL,
      ...contactPL,
      ...navbarPL,
      ...settingsPL
    }
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
