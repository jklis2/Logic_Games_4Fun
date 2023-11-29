import React from "react";
import { useTranslation } from "react-i18next";

function QuizReview({ questions, userAnswers, setScreen }) {
  const [t] = useTranslation(["translation", "quiz"]);
  const calculateScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
  };

  return (
    <div className="quiz text-center fs-4">
      <h1 className="difficulty-card__title">
      {t("quiz.reviewTitle")} {calculateScore()} {t("quiz.reviewTitleOutFor")} {questions.length}
      </h1>
      {questions.map((question, index) => (
        <div key={index} className="review-question">
          <p>
          {t("quiz.reviewQuestion")} {index + 1}/{questions.length}: {question.question}
          </p>
          <p
            className={
              userAnswers[index] === question.correctAnswer
                ? "quiz__correct"
                : "quiz__incorrect"
            }
          >
            {t("quiz.yourAnswer")} {question.options[userAnswers[index]]}
          </p>
          {userAnswers[index] !== question.correctAnswer && (
            <p className="quiz__correct">
              {t("quiz.correctAnswer")} {question.options[question.correctAnswer]}
            </p>
          )}
        </div>
      ))}
      <button className="button-light" onClick={() => setScreen("mainMenu")}>{t("quiz.backToMenuButton")}</button>
    </div>
  );
}

export default QuizReview;
