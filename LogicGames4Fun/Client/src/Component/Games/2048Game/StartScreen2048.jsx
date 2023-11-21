import React, { useState } from "react";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";

function StartScreen2048({ onStart }) {
  const difficultyList = ["easy", "medium", "hard", "extreme"];
  const [selectedLevel, setSelectedLevel] = useState("easy");

  return (
    <DifficultyMenu
      gameName="2048"
      diffList={difficultyList}
      initialDiff={selectedLevel}
      onDiffChange={(e) => setSelectedLevel(e.target.value)}
      onGameStart={() => onStart(selectedLevel)}
    />
  );
}

export default StartScreen2048;
