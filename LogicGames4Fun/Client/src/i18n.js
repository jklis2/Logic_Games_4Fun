import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import homeEN from "./Translations/en/homeEN.json";
import homePL from "./Translations/pl/homePL.json";
import aboutUsEN from "./Translations/en/aboutUsEN.json";
import aboutUsPL from "./Translations/pl/aboutUsPL.json";
import contactEN from "./Translations/en/contactEN.json";
import contactPL from "./Translations/pl/contactPL.json";
import navbarEN from "./Translations/en/navbarEN.json";
import navbarPL from "./Translations/pl/navbarPL.json";
import settingsEN from "./Translations/en/settingsEN.json";
import settingsPL from "./Translations/pl/settingsPL.json";
import dashboardEN from "./Translations/en/dashboardEN.json";
import dashboardPL from "./Translations/pl/dashboardPL.json";
import sudokuEN from "./Translations/en/sudokuEN.json";
import sudokuPL from "./Translations/pl/sudokuPL.json";
import memoryEN from "./Translations/en/memoryEN.json";
import memoryPL from "./Translations/pl/memoryPL.json";
import difficultyMenuEN from "./Translations/en/difficultyMenuEN.json";
import difficultyMenuPL from "./Translations/pl/difficultyMenuPL.json";
import MazeDifficultyMenuEN from "./Translations/en/mazeDifficultyMenuEN.json";
import MazeDifficultyMenuPL from "./Translations/pl/mazeDifficultyMenuPL.json";
import ticTacToeDifficultyMenuEN from "./Translations/en/ticTacToeDifficultyMenuEN.json";
import ticTacToeDifficultyMenuPL from "./Translations/pl/ticTacToeDifficultyMenuPL.json";
import game2048EN from "./Translations/en/game2048EN.json";
import game2048PL from "./Translations/pl/game2048PL.json";
import minesweeperEN from "./Translations/en/minesweeperEN.json";
import minesweeperPL from "./Translations/pl/minesweeperPL.json";
import snakeEN from "./Translations/en/snakeEN.json";
import snakePL from "./Translations/pl/snakePL.json";
import mazeEN from "./Translations/en/mazeEN.json";
import mazePL from "./Translations/pl/mazePL.json";
import ticTacToeEN from "./Translations/en/ticTacToeEN.json";
import ticTacToePL from "./Translations/pl/ticTacToePL.json";
import ballInTheHoleEN from "./Translations/en/ballInTheHoleEN.json";
import ballInTheHolePL from "./Translations/pl/ballInTheHolePL.json";
import quizEN from "./Translations/en/quizEN.json";
import quizPL from "./Translations/pl/quizPL.json";
import crosswordEN from "./Translations/en/crosswordEN.json";
import crosswordPL from "./Translations/pl/crosswordPL.json";
import achievementEN from "./Translations/en/achievementEN.json";
import achievementPL from "./Translations/pl/achievementPL.json";
import authEN from "./Translations/en/authEN.json";
import authPL from "./Translations/pl/authPL.json"

const resources = {
  en: {
    translation: {
      ...homeEN,
      ...aboutUsEN,
      ...contactEN,
      ...navbarEN,
      ...settingsEN,
      ...dashboardEN,
      ...sudokuEN,
      ...memoryEN,
      ...difficultyMenuEN,
      ...MazeDifficultyMenuEN,
      ...ticTacToeDifficultyMenuEN,
      ...game2048EN,
      ...minesweeperEN,
      ...snakeEN,
      ...mazeEN,
      ...ticTacToeEN,
      ...ballInTheHoleEN,
      ...quizEN,
      ...crosswordEN,
      ...achievementEN,
      ...authEN
    },
  },
  pl: {
    translation: {
      ...homePL,
      ...aboutUsPL,
      ...contactPL,
      ...navbarPL,
      ...settingsPL,
      ...dashboardPL,
      ...sudokuPL,
      ...memoryPL,
      ...difficultyMenuPL,
      ...MazeDifficultyMenuPL,
      ...ticTacToeDifficultyMenuPL,
      ...game2048PL,
      ...minesweeperPL,
      ...snakePL,
      ...mazePL,
      ...ticTacToePL,
      ...ballInTheHolePL,
      ...quizPL,
      ...crosswordPL,
      ...achievementPL,
      ...authPL
    },
  },
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
