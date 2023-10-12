import React, { useState } from "react";

function DifficultPage({ setGameType, setPlayerNames, setDifficulty }) {
  const [player1, setPlayer1] = useState("");
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

  const startMultiplayerGame = () => {
    setPlayerNames({ playerX: playerX, playerO: playerO });
    setGameType("multi");
  };

  const startSinglePlayerGame = () => {
    setPlayerNames({ playerX: player1 || "Player", playerO: "Bot" });
    setGameType("single");
  };

  return (
    <div>
      <button onClick={startSinglePlayerGame}>Single Player</button>
      <input
        placeholder="Your Name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <select
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <div>
        <input
          placeholder="Player X Name"
          value={playerX}
          onChange={(e) => setPlayerX(e.target.value)}
        />
        <input
          placeholder="Player O Name"
          value={playerO}
          onChange={(e) => setPlayerO(e.target.value)}
        />
        <button onClick={startMultiplayerGame}>Start Two Player Game</button>
      </div>
    </div>
  );
}

export default DifficultPage;
