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
    <>
      {!isGameStarted ? (
        <div className="difficulty-card bg-light p-5 fs-4">
        <div>
          <h2 className="fw-300">Snake</h2>
          <div className="mt-3 d-flex flex-column">
            <label>Select a difficulty:</label>
            <select className="mt-2 difficulty-card__select" value={difficulty} onChange={onDifficultyChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button onClick={onGameStart} className="button-light mt-4">Start</button>
        </div>
      </div>
      ) : (
        <div className="mt-3">
          <button className="button-light" onClick={onGameRestart}>Restart</button>
          <button className="button-light ms-3" onClick={onMenuReturn}>Back to Menu</button>
        </div>
      )}
      </>
  );
}

export default SnakeControls;
