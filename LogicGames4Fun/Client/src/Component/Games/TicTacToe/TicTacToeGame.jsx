import React, { useState } from "react";
import DifficultPage from "./DifficultPage";
import TicTacToeBoard from "./TicTacToeBoard";

export const TicTacToeGame = () => {
  const [gameType, setGameType] = useState(null);
  const [playerNames, setPlayerNames] = useState({
    playerX: "X",
    playerO: "O",
  });
  const [difficulty, setDifficulty] = useState("medium");

  return (
    <div className="App">
      {!gameType ? (
        <DifficultPage
          setGameType={setGameType}
          setPlayerNames={setPlayerNames}
          setDifficulty={setDifficulty}
        />
      ) : (
        <TicTacToeBoard
          gameType={gameType}
          setGameType={setGameType}
          playerNames={playerNames}
          difficulty={difficulty}
        />
      )}
    </div>
  );
  };