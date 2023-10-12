import React from "react";

function SnakeControls({
  isGameStarted,
  difficulty,
  onGameStart,
  onGameRestart,
  onMenuReturn,
  onDifficultyChange,
}) {
  return (
    <div>
      {!isGameStarted ? (
        <div>
          <div>
            <label>Difficulty: </label>
            <select value={difficulty} onChange={onDifficultyChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button onClick={onGameStart}>Start</button>
        </div>
      ) : (
        <>
          <button onClick={onGameRestart}>Restart</button>
          <button onClick={onMenuReturn}>Back to Menu</button>
        </>
      )}
    </div>
  );
}

export default SnakeControls;
