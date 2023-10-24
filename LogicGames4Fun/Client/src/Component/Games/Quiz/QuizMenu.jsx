import React, { useState } from "react";

function QuizMenu({ setScreen, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const startGame = () => {
    setScreen("gameBoard", selectedCategory);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <label>
          Choose a category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
        </label>
      </div>
      <div>
        <button onClick={startGame}>Start</button>
        <button onClick={() => setScreen("questionForm")}>Add Question</button>
      </div>
    </div>
  );
}

export default QuizMenu;
