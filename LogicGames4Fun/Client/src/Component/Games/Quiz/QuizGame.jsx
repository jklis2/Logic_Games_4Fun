import React, { useState } from "react";
import "./styles/QuizGame.css";
import QuizMenu from "./QuizMenu";
import QuizBoard from "./QuizBoard";
import QuizQuestionForm from "./QuizQuestionForm";
import QuizReview from "./QuizReview";

const QuizGame = () =>  {
  const [screen, setScreen] = useState("mainMenu");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const categories = [
    "Geography",
    "Animals",
    "History",
    "Science",
    "Literature",
  ];

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].toLowerCase();
  };

  const changeScreen = (newScreen, category) => {
    if (newScreen === "gameBoard" && !category) {
      const randomCategory = getRandomCategory();
      setSelectedCategory(randomCategory);
    } else {
      setSelectedCategory(category);
    }
    setScreen(newScreen);
  };

  return (
    <div className="App">
      {screen === "mainMenu" && (
        <QuizMenu setScreen={changeScreen} categories={categories} />
      )}
      {screen === "gameBoard" && (
        <QuizBoard
          category={selectedCategory}
          setScreen={changeScreen}
          setQuestions={setQuestions}
          setUserAnswers={setUserAnswers}
        />
      )}
      {screen === "questionForm" && (
        <QuizQuestionForm setScreen={changeScreen} categories={categories} />
      )}
      {screen === "review" && (
        <QuizReview
          questions={questions}
          userAnswers={userAnswers}
          setScreen={setScreen}
        />
      )}
    </div>
  );
}

export default QuizGame;
