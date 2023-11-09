import React from "react";

export const TicTacToeMenu = () => {
  return (
    <div className="difficulty-card text-center bg-light p-5 fs-4">
      <div className="d-flex flex-column">
      <h1 className="difficulty-card__title mb-3">Tic Tac Toe</h1>
      
      <div className="mx-4 d-flex flex-column">
          <label htmlFor="singlePlayer" className="difficulty-card__label mb-2 d-flex align-items-center align-items-center">
            Your name
          </label>
          <input
            id="singlePlayer"
            type="text"
            className="difficulty-card__input mx-2 px-3"
          />
          <button className="button-light mt-3">Play with AI</button>
        </div>

      </div>
    </div>
  );
};
