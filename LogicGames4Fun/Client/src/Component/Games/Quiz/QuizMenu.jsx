import React, { useState } from "react";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";
import { useTranslation } from "react-i18next";

function QuizMenu({ setScreen, categories }) {
  const [t] = useTranslation(["translation", "quiz"]);
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
      optionalActionTitle= {t("quiz.optionalActionTitle")}
    ></DifficultyMenu>
  );
}

export default QuizMenu;
