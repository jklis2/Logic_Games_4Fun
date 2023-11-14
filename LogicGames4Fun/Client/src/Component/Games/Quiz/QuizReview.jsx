import React from "react";

function QuizReview({ questions, userAnswers, setScreen }) {
  const calculateScore = () => {
    return userAnswers.filter(
      (answer, index) => answer === questions[index].correctAnswer
    ).length;
  };

  return (
    <div className="quiz text-center fs-4">
      <h1 className="difficulty-card__title">
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
                ? "quiz__correct"
                : "quiz__incorrect"
            }
          >
            Your answer: {question.options[userAnswers[index]]}
          </p>
          {userAnswers[index] !== question.correctAnswer && (
            <p className="quiz__correct">
              Correct answer: {question.options[question.correctAnswer]}
            </p>
          )}
        </div>
      ))}
      <button className="button-light" onClick={() => setScreen("mainMenu")}>Back to Menu</button>
    </div>
  );
}

export default QuizReview;
