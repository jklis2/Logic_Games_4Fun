import React, { useState } from "react";
import "./CrosswordStyle.css";
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
      <div className="app">
        <header className="app-header">
          <h1>Crossword Puzzle - {difficulty}</h1>
        </header>
        <CrosswordBoard difficulty={difficulty} />
      </div>
    );
  }

  if (showAddWord) {
    return (
      <div className="app">
        <CrosswordAddWord />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Crossword</h1>
      </header>
      <div className="difficulty-selection">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="impossible">Impossible</option>
        </select>
      </div>
      <button onClick={startGame} className="start-button">
        Start
      </button>
      <button onClick={() => setShowAddWord(true)} className="add-word-button">
        Add word to crossword
      </button>
    </div>
  );
}

export default CrosswordGame;
