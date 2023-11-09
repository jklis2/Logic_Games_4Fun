import React from "react";

export const MazeDifficultyMenu = ({
  size,
  onChangeSize,
  cheatMode,
  onSelectCheatMode,
  onGameStart,
}) => {
  return (
    <div className="difficulty-card text-center bg-light p-5 fs-4">
      <div className="d-flex flex-column">
        <h1 className="difficulty-card__title mb-3">Maze</h1>

        <div className="input-group mx-4">
          <label htmlFor="difficulty" className="difficulty-card__label mb-2 d-flex align-items-center">
            Enter the size of the maze from 5 to 40
          </label>

          <input
            id="size"
            type="number"
            value={size}
            onChange={onChangeSize}
            min="5"
            max="40"
            className="difficulty-card__input mx-2 px-3"
          />
        </div>

        <div className="input-group mx-4">
          <label htmlFor="cheatMode" className="difficulty-card__label mb-2">
            Cheat mode:
          </label>
          <input
            id="cheatMode"
            type="checkbox"
            className="difficulty-card__checkbox"
            checked={cheatMode}
            onChange={onSelectCheatMode}
          />
          {cheatMode && (
            <span className="text-danger d-flex align-items-center">
              Your results will not be saved!
            </span>
          )}
        </div>

        <div className="row mt-4">
          <div className="col d-flex justify-content-md-end justify-content-center">
            <button onClick={onGameStart} className="button-light w-100">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
