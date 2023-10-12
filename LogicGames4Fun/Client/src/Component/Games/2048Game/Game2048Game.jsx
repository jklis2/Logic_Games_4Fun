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
    <div className="App">
      {gameStarted ? (
        <Logic2048 level={level} onReturnToStart={handleReturnToStart} />
      ) : (
        <StartScreen2048 onStart={handleStart} />
      )}
    </div>
  );
}
