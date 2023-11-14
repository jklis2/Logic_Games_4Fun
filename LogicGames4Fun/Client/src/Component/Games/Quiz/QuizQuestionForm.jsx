import React, { useState } from "react";

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

function QuizQuestionForm({ setScreen, categories }) {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question added:", {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
      category,
    });
  };

  return (
    <div className="d-flex flex-column">
      <h1 className="difficulty-card__title text-center mb-3">Add Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category" className="difficulty-card__label mb-2">
            Category:
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="difficulty-card__select"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {capitalize(category)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="difficulty-card__label mt-2">Question:</label>
          <input
            type="text"
            className="difficulty-card__input w-100"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="optionA" className="difficulty-card__label mt-2">
            Option A:
          </label>
          <input
            type="text"
            id="optionA"
            className="difficulty-card__input w-100"
            value={optionA}
            onChange={(e) => setOptionA(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="optionB" className="difficulty-card__label mt-2">
            Option B:
          </label>

          <input
            type="text"
            id="optionB"
            className="difficulty-card__input w-100"
            value={optionB}
            onChange={(e) => setOptionB(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="optionC" className="difficulty-card__label  mt-2">
            Option C:
          </label>
          <input
            id="optionC"
            type="text"
            className="difficulty-card__input w-100"
            value={optionC}
            onChange={(e) => setOptionC(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="optionD" className="difficulty-card__label mt-2">
            Option D:
          </label>

          <input
            id="optionD"
            type="text"
            className="difficulty-card__input w-100"
            value={optionD}
            onChange={(e) => setOptionD(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="difficulty-card__label mt-2">Correct Answer:</label>

          <select
            value={correctAnswer}
            className="difficulty-card__select"
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="" disabled>
              Select correct answer
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <button
              type="button"
              className="button-light w-100 h-100"
              onClick={() => setScreen("mainMenu")}
            >
              Back
            </button>
          </div>

          <div className="col-md-6">
            <button type="submit" className="button-light">
              Add Question
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuizQuestionForm;
