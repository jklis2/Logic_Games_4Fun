import React, { useState } from "react";

export const TicTacToeMenu = ({
  setGameType,
  setPlayerNames,
  difficulty,
  setDifficulty,
}) => {
  const [player1, setPlayer1] = useState("");
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const startMultiplayerGame = () => {
    setPlayerNames({ playerX: playerX, playerO: playerO });
    setGameType("multi");
  };

  const startSinglePlayerGame = () => {
    setPlayerNames({ playerX: player1 || "Player", playerO: "Bot" });
    setGameType("single");
  };

  return (
  
      <div className="difficulty-card text-center bg-light p-5 fs-4">
        <div className="d-flex flex-column">
          <h1 className="difficulty-card__title mb-3">Tic Tac Toe</h1>

          <div className="mx-4 d-flex flex-column">
            <label
              htmlFor="singlePlayer"
              className="difficulty-card__label mb-2 d-flex align-items-center align-items-center"
            >
              Your name
            </label>
            <input
              id="singlePlayer"
              type="text"
              className="difficulty-card__input px-3"
              onChange={(e) => setPlayer1(e.target.value)}
            />

            <label
              htmlFor="difficulty"
              className="difficulty-card__label mb-2 mt-3 d-flex align-items-center align-items-center"
            >
              Select a difficulty
            </label>

            <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)} className="difficulty-card__select">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button
              className="button-light mt-3"
              onClick={startSinglePlayerGame}
            >
              Play with AI
            </button>
          </div>

          <div className="my-3">Or play with someone:</div>

          <div className="mx-4 d-flex flex-column">
            <label
              htmlFor="firstPlayer"
              className="difficulty-card__label mb-2 d-flex align-items-center align-items-center"
            >
              Player X name
            </label>
            <input
              id="firstPlayer"
              type="text"
              className="difficulty-card__input px-3"
              value={playerX}
              onChange={(e) => setPlayerX(e.target.value)}
            />

            <label
              htmlFor="secondPlayer"
              className="difficulty-card__label mb-2 mt-3 d-flex align-items-center align-items-center"
            >
              Player O name
            </label>
            <input
              id="secondPlayer"
              type="text"
              className="difficulty-card__input px-3"
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
            />

            <button
              className="button-light mt-3"
              onClick={startMultiplayerGame}
            >
              Play with another player
            </button>
          </div>
        </div>
      </div>
  
  );
};
