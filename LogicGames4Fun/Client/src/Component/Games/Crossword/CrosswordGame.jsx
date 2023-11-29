import React, { useState } from "react";
import CrosswordBoard from "./CrosswordBoard";
import CrosswordAddWord from "./CrosswordAddWord";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";
import { useTranslation } from "react-i18next";

function CrosswordGame() {
  const [t] = useTranslation(["translation", "crossword"]);
  const difficultyList = ["easy", "medium", "hard", "impossible"];

  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [showAddWord, setShowAddWord] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setShowAddWord(false);
  };

  if (gameStarted) {
    return (
      <div className="d-flex flex-column align-items-center container">
        <div className="crossword bg-light m-5 p-5">
          <h1 className="h1 text-center">{t("crossword.crosswordTitle")} {difficulty}</h1>
          <CrosswordBoard difficulty={difficulty} />
        </div>
      </div>
    );
  }

  if (showAddWord) {
    return (
      <div className="d-flex flex-column align-items-center container">
        <div className="crossword bg-light m-5 p-5">
          <CrosswordAddWord />
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center container">
      <DifficultyMenu
        gameName="Crossoword"
        diffList={difficultyList}
        initialDiff={difficulty}
        onDiffChange={(e) => setDifficulty(e.target.value)}
        onGameStart={startGame}
        optionalAction={() => setShowAddWord(true)}
        optionalActionTitle={t("crossword.optionalActionTitle")}
      />
    </div>
  );
}

export default CrosswordGame;
