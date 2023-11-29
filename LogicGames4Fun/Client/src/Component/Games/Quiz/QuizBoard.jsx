import React, { useEffect, useState } from "react";
import quizDictionary from "./quizDictionary";
import { useTranslation } from "react-i18next";

function QuizBoard({ category, setScreen, setQuestions, setUserAnswers }) {
  const [t] = useTranslation(["translation", "quiz"]);
  const [questions, setQuestionsState] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswersState, setUserAnswersState] = useState([]);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const filteredQuestions = category
      ? quizDictionary.filter((q) => q.category.toLowerCase() === category)
      : quizDictionary;
    const randomQuestions = filteredQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);
    setQuestionsState(randomQuestions);
    setQuestions(randomQuestions);
  }, [category, setQuestions]);

  const shuffleAnswers = (options) => {
    const entries = Object.entries(options);
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    return Object.fromEntries(entries);
  };

  const handleAnswerClick = (answer) => {
    const updatedAnswers = [...userAnswersState];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswersState(updatedAnswers);
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex === questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateScore = () => {
    return userAnswersState.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
  };

  const handlePlayAgain = () => {
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setUserAnswersState([]);
    setScreen("gameBoard", category);
  };

  return (
    <div className="game-board">
      {showScore ? (
        <div>
          <p className="text-center fs-4">
            {t("quiz.scoredMessage")} {calculateScore()}{" "}
            {t("quiz.scoredMessageOutOf")} {questions.length}!
          </p>
          <button
            className="button-light p-3 fs-5"
            onClick={() => setScreen("mainMenu")}
          >
            {t("quiz.backToMenuButton")}
          </button>
          <button
            className="button-light mx-3 p-3 fs-5"
            onClick={handlePlayAgain}
          >
            {t("quiz.playAgainButton")}
          </button>
          <button
            className="button-light p-3 fs-5"
            onClick={() => setScreen("review")}
          >
            {t("quiz.reviewButton")}
          </button>
        </div>
      ) : (
        questions.length > 0 && (
          <div>
            <div className="question-section fs-3">
              <p>
                {t("quiz.reviewQuestion")} {currentQuestionIndex + 1}/
                {questions.length}: {questions[currentQuestionIndex].question}
              </p>
            </div>
            <div className="row">
              {Object.entries(
                shuffleAnswers(questions[currentQuestionIndex].options)
              ).map(([key, value]) => (
                <div className="col-md-6">
                  <button
                    key={key}
                    onClick={() => handleAnswerClick(key)}
                    className="button-light fs-3 w-100 my-2"
                  >
                    {key.toUpperCase()}: {value}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default QuizBoard;
