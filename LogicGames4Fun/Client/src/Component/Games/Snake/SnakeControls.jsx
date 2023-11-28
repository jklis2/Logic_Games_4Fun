import React from "react";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";
import { useTranslation } from "react-i18next";

function SnakeControls({
  isGameStarted,
  difficulty,
  onGameStart,
  onGameRestart,
  onMenuReturn,
  onDifficultyChange,
}) {
  const [t] = useTranslation(["translation", "sanke"]);
  const difficultyList = ["easy", "medium", "hard"];
  return (
    <>
      {!isGameStarted ? (
        <DifficultyMenu
          gameName="Snake"
          diffList={difficultyList}
          initialDiff={difficulty}
          onDiffChange={onDifficultyChange}
          onGameStart={onGameStart}
        ></DifficultyMenu>
      ) : (
        <div className="mt-3">
          <button className="button-light" onClick={onGameRestart}>
            {t("snake.restartButton")}
          </button>
          <button className="button-light ms-3" onClick={onMenuReturn}>
            {t("snake.backToMenuButton")}
          </button>
        </div>
      )}
    </>
  );
}

export default SnakeControls;
