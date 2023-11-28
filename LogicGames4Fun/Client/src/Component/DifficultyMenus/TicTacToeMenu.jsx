import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const TicTacToeMenu = ({
  setGameType,
  setPlayerNames,
  difficulty,
  setDifficulty,
}) => {
  const [t] = useTranslation(["translation", "ticTacToeDifficultyMenu"]);
  const [player1, setPlayer1] = useState("");
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const startMultiplayerGame = () => {
    setPlayerNames({ playerX: playerX, playerO: playerO });
    setGameType("multi");
  };

  const startSinglePlayerGame = () => {
    setPlayerNames({ playerX: player1 || "Player", playerO: "Bot" });
    setGameType("single");
  };

  return (
  
      <div className="difficulty-card text-center bg-light p-5 fs-4">
        <div className="d-flex flex-column">
          <h1 className="difficulty-card__title mb-3">{t("ticTacToeDifficultyMenu.title")}</h1>

          <div className="mx-4 d-flex flex-column">
            <label
              htmlFor="singlePlayer"
              className="difficulty-card__label mb-2 d-flex align-items-center align-items-center"
            >
              {t("ticTacToeDifficultyMenu.yourNameLabel")}
            </label>
            <input
              id="singlePlayer"
              type="text"
              className="difficulty-card__input px-3"
              onChange={(e) => setPlayer1(e.target.value)}
            />

            <label
              htmlFor="difficulty"
              className="difficulty-card__label mb-2 mt-3 d-flex align-items-center align-items-center"
            >
              {t("ticTacToeDifficultyMenu.selectDifficultyLabel")}
            </label>

            <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} className="difficulty-card__select">
              <option value="easy">{t("ticTacToeDifficultyMenu.easyOption")}</option>
              <option value="medium">{t("ticTacToeDifficultyMenu.mediumOption")}</option>
              <option value="hard">{t("ticTacToeDifficultyMenu.hardOption")}</option>
            </select>

            <button
              className="button-light mt-3"
              onClick={startSinglePlayerGame}
            >
              {t("ticTacToeDifficultyMenu.playWithAILabel")}
            </button>
          </div>

          <div className="my-3">{t("ticTacToeDifficultyMenu.orPlayWithSomeone")}</div>

          <div className="mx-4 d-flex flex-column">
            <label
              htmlFor="firstPlayer"
              className="difficulty-card__label mb-2 d-flex align-items-center align-items-center"
            >
              {t("ticTacToeDifficultyMenu.playerXNameLabel")}
            </label>
            <input
              id="firstPlayer"
              type="text"
              className="difficulty-card__input px-3"
              value={playerX}
              onChange={(e) => setPlayerX(e.target.value)}
            />

            <label
              htmlFor="secondPlayer"
              className="difficulty-card__label mb-2 mt-3 d-flex align-items-center align-items-center"
            >
              {t("ticTacToeDifficultyMenu.playerONameLabel")}
            </label>
            <input
              id="secondPlayer"
              type="text"
              className="difficulty-card__input px-3"
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
            />

            <button
              className="button-light mt-3"
              onClick={startMultiplayerGame}
            >
              {t("ticTacToeDifficultyMenu.playWithAnotherPlayer")}
            </button>
          </div>
        </div>
      </div>
  
  );
};
