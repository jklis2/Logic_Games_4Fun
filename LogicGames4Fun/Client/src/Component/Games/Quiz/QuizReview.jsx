import React from "react";
import "./styles/QuizReview.css";

function QuizReview({ questions, userAnswers, setScreen }) {
  const calculateScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
  };

  return (
    <div className="review">
      <h1>
        Review - You scored {calculateScore()} out of {questions.length}
      </h1>
      {questions.map((question, index) => (
        <div key={index} className="review-question">
          <p>
            Question {index + 1}/{questions.length}: {question.question}
          </p>
          <p
            className={
              userAnswers[index] === question.correctAnswer
                ? "correct"
                : "incorrect"
            }
          >
            Your answer: {question.options[userAnswers[index]]}
          </p>
          {userAnswers[index] !== question.correctAnswer && (
            <p className="correct">
              Correct answer: {question.options[question.correctAnswer]}
            </p>
          )}
        </div>
      ))}
      <button onClick={() => setScreen("mainMenu")}>Back to Menu</button>
    </div>
  );
}

export default QuizReview;
