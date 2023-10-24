import React, { useState } from "react";
import CrosswordBoard from "./CrosswordBoard";
import CrosswordAddWord from "./CrosswordAddWord";

function CrosswordGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [showAddWord, setShowAddWord] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setShowAddWord(false);
  };

  if (gameStarted) {
    return (
      <div className="d-flex flex-column align-items-center container">
        <div className="crossword bg-light m-5 p-5">
          <h1 className="h1 text-center">Crossword Puzzle - {difficulty}</h1>
          <CrosswordBoard difficulty={difficulty} />
        </div>
      </div>
    );
  }

  if (showAddWord) {
    return (
      <div className="d-flex flex-column align-items-center container">
        <div className="crossword bg-light m-5 p-5">
          <CrosswordAddWord />
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center container">
      <div className="difficulty-card bg-light m-5 p-5">
        <h1 className="h1 text-center">Crossword</h1>
        <p className="fs-5 mt-3">Please select a difficulty.</p>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="d-block mb-4 difficulty-card__select w-100 fs-4"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="impossible">Impossible</option>
          </select>
        <button className="button-light" onClick={startGame}>
          Start
        </button>
        <button
          onClick={() => setShowAddWord(true)}
          className="button-light ms-2" 
        >
          Add word to crossword
        </button>
      </div>
    </div>
  );
}

export default CrosswordGame;
