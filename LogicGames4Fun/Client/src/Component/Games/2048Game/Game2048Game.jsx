import React, { useState } from "react";
import Logic2048 from "./Logic2048";
import StartScreen2048 from "./StartScreen2048";

export const Game2048Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState("easy");

  const handleStart = (selectedLevel) => {
    setLevel(selectedLevel);
    setGameStarted(true);
  };

  const handleReturnToStart = () => {
    setGameStarted(false);
  };

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      {gameStarted ? (
        <div className="difficulty-card bg-light p-5">
          <Logic2048 level={level} onReturnToStart={handleReturnToStart} />
        </div>
      ) : (
        <StartScreen2048 onStart={handleStart} />
      )}
    </div>
  );
};
