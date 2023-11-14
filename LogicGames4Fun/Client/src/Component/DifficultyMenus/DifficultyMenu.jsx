import React from "react";

export const DifficultyMenu = ({
  gameName,
  diffList,
  initialDiff,
  onDiffChange,
  onGameStart,
  optionalAction,
  optionalActionTitle,
}) => {
  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
  return (
    <div className="difficulty-card text-center bg-light p-5 fs-4">
      <div className="d-flex flex-column">
        <h1 className="difficulty-card__title mb-3">{gameName}</h1>
        <label htmlFor="difficulty" className="difficulty-card__label mb-2">
          Select a {gameName === "Quiz" ? "category" : "difficulty"}
        </label>
        <select
          id="difficulty"
          className="difficulty-card__select mb-3"
          value={initialDiff}
          onChange={onDiffChange}
        >
          {diffList.map((level, i) => (
            <option key={i} value={level}>
              {capitalize(level)}
            </option>
          ))}
        </select>

        <div className="row mt-4">
          {optionalAction && (
            <>
              <div className="col-md-6">
                <button onClick={onGameStart} className="button-light w-100">
                  Start
                </button>
              </div>

              <div className="col-md-6">
                <button onClick={optionalAction} className="button-light w-100">
                  {optionalActionTitle}
                </button>
              </div>
            </>
          )}

          {!optionalAction && (
            <div className="col d-flex justify-content-md-end justify-content-center">
              <button onClick={onGameStart} className="button-light w-100">
                Start
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
