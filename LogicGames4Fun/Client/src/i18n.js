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
import authPL from "./Translations/pl/authPL.json";
import profileEN from "./Translations/en/profileEN.json";
import profilePL from "./Translations/pl/profilePL.json";
import ballInTheHolePopEN from "./Translations/en/ballInTheHolePopEN.json";
import ballInTheHolePopPL from "./Translations/pl/ballInTheHolePopPL.json";
import game2048PopEN from "./Translations/en/game2048PopEN.json";
import game2048PopPL from "./Translations/pl/game2048PopPL.json";
import mazePopEN from "./Translations/en/mazePopEN.json";
import mazePopPL from "./Translations/pl/mazePopPL.json";
import minesweeperPopEN from "./Translations/en/minesweeperPopEN.json";
import minesweeperPopPL from "./Translations/pl/minesweeperPopPL.json";
import quizPopEN from "./Translations/en/quizPopEN.json";
import quizPopPL from "./Translations/pl/quizPopPL.json";
import snakePopEN from "./Translations/en/snakePopEN.json";
import snakePopPL from "./Translations/pl/snakePopPL.json";
import ticTacToePopEN from "./Translations/en/ticTacToePopEN.json";
import ticTacToePopPL from "./Translations/pl/ticTacToePopPL.json";
import crosswordHowToPlayPopEN from "./Translations/en/crosswordHowToPlayPopEN.json";
import crosswordHowToPlayPopPL from "./Translations/pl/crosswordHowToPlayPopPL.json";
import crosswordTipsPopEN from "./Translations/en/crosswordTipsPopEN.json";
import crosswordTipsPopPL from "./Translations/pl/crosswordTipsPopPL.json";
import memoryHowToPlayPopEN from "./Translations/en/memoryHowToPlayPopEN.json";
import memoryHowToPlayPopPL from "./Translations/pl/memoryHowToPlayPopPL.json";
import memoryTipsPopEN from "./Translations/en/memoryTipsPopEN.json";
import memoryTipsPopPL from "./Translations/pl/memoryTipsPopPL.json";
import sudokuHowToPlayPopEN from "./Translations/en/sudokuHowToPlayPopEN.json";
import sudokuHowToPlayPopPL from "./Translations/pl/sudokuHowToPlayPopPL.json";
import sudokuTipsPopEN from "./Translations/en/sudokuTipsPopEN.json";
import sudokuTipsPopPL from "./Translations/pl/sudokuTipsPopPL.json";

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
      ...authEN,
      ...profileEN,
      ...ballInTheHolePopEN,
      ...game2048PopEN,
      ...mazePopEN,
      ...minesweeperPopEN,
      ...quizPopEN,
      ...snakePopEN,
      ...ticTacToePopEN,
      ...crosswordHowToPlayPopEN,
      ...crosswordTipsPopEN,
      ...memoryHowToPlayPopEN,
      ...memoryTipsPopEN,
      ...sudokuHowToPlayPopEN,
      ...sudokuTipsPopEN,
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
      ...authPL,
      ...profilePL,
      ...ballInTheHolePopPL,
      ...game2048PopPL,
      ...mazePopPL,
      ...minesweeperPopPL,
      ...quizPopPL,
      ...snakePopPL,
      ...ticTacToePopPL,
      ...crosswordHowToPlayPopPL,
      ...crosswordTipsPopPL,
      ...memoryHowToPlayPopPL,
      ...memoryTipsPopPL,
      ...sudokuHowToPlayPopPL,
      ...sudokuTipsPopPL,
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
