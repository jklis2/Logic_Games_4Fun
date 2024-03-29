import React, { useState } from "react";
import QuizMenu from "./QuizMenu";
import QuizBoard from "./QuizBoard";
import QuizQuestionForm from "./QuizQuestionForm";
import QuizReview from "./QuizReview";

const QuizGame = () => {
  const [screen, setScreen] = useState("mainMenu");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const categories = [
    "random",
    "geography",
    "animals",
    "history",
    "science",
    "literature",
  ];

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].toLowerCase();
  };

  const changeScreen = (newScreen, category) => {
    if (newScreen === "gameBoard" && category === "random") {
      const randomCategory = getRandomCategory();
      setSelectedCategory(randomCategory);
    } else {
      setSelectedCategory(category);
    }
    setScreen(newScreen);
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      {screen === "mainMenu" && (
        <QuizMenu setScreen={changeScreen} categories={categories} />
      )}
      {screen === "gameBoard" && (
        <div className="difficulty-card bg-light p-5 text-">
          <QuizBoard
            category={selectedCategory}
            setScreen={changeScreen}
            setQuestions={setQuestions}
            setUserAnswers={setUserAnswers}
          />
        </div>
      )}
      {screen === "questionForm" && (
        <div className="difficulty-card bg-light p-5 text-">
          <QuizQuestionForm setScreen={changeScreen} categories={categories} />
        </div>
      )}
      {screen === "review" && (
        <div className="difficulty-card bg-light p-5 text-">
          <QuizReview
            questions={questions}
            userAnswers={userAnswers}
            setScreen={setScreen}
          />
        </div>
      )}
    </div>
  );
};

export default QuizGame;
