import React, { useState } from "react";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";

function QuizMenu({ setScreen, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const startGame = () => {
    setScreen("gameBoard", selectedCategory);
  };

  return (
    <DifficultyMenu
      gameName="Quiz"
      diffList={categories}
      initialDiff={selectedCategory}
      onDiffChange={e => setSelectedCategory(e.target.value)}
      onGameStart={startGame}

      optionalAction={() => setScreen("questionForm")}
      optionalActionTitle="Add Question"
    ></DifficultyMenu>
  );
}

export default QuizMenu;
