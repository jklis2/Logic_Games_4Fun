import React, { useState } from "react";
import TicTacToeBoard from "./TicTacToeBoard";
import { TicTacToeMenu } from "../../DifficultyMenus/TicTacToeMenu";

export const TicTacToeGame = () => {
  const [gameType, setGameType] = useState(null);
  const [playerNames, setPlayerNames] = useState({
    playerX: "X",
    playerO: "O",
  });
  const [difficulty, setDifficulty] = useState("medium");

  return (
   <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      {!gameType ? (
        <TicTacToeMenu
          setGameType={setGameType}
          setPlayerNames={setPlayerNames}
          difficulty={difficulty}
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
