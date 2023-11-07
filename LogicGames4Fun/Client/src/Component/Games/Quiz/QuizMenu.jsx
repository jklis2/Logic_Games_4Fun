import React, { useState } from "react";

function QuizMenu({ setScreen, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const startGame = () => {
    setScreen("gameBoard", selectedCategory);
  };

  return (
    <>
      <h1>Quiz</h1>
      <label className="fs-3 mb-2">Choose a category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="d-block mb-4 difficulty-card__select w-100 fs-4"
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>

      <div>
        <button className="btn btn-primary p-3 fs-4" onClick={startGame}>
          Start
        </button>

        <button
          className="btn btn-primary p-3 ms-1 fs-4"
          onClick={() => setScreen("questionForm")}
        >
          Add Question
        </button>
      </div>
    </>
  );
}

export default QuizMenu;
