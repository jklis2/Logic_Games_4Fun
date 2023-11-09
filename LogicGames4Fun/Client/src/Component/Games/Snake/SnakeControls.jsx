import React from "react";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";

function SnakeControls({
  isGameStarted,
  difficulty,
  onGameStart,
  onGameRestart,
  onMenuReturn,
  onDifficultyChange,
}) {
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
            Restart
          </button>
          <button className="button-light ms-3" onClick={onMenuReturn}>
            Back to Menu
          </button>
        </div>
      )}
    </>
  );
}

export default SnakeControls;
