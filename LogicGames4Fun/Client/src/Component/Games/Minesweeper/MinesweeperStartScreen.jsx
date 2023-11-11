import React from "react";

const MinesweeperStartScreen = ({
  onStart,
  onDifficultyChange,
  difficulty,
}) => {
  return (
    <div className="start-screen">
      <h1>Minesweeper</h1>
      <select
        className="difficulty-select"
        value={difficulty}
        onChange={onDifficultyChange}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className="start-button" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
};

export default MinesweeperStartScreen;
