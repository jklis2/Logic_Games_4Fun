import React, { useState } from "react";
import "./MazeStyles.scss";

const MazeStartScreen = ({ onStart }) => {
  const [size, setSize] = useState(10);
  const [cheatMode, setCheatMode] = useState(false);

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
  };

  const handleCheatModeChange = (event) => {
    setCheatMode(event.target.checked);
  };

  const handleStartGame = () => {
    onStart(size, cheatMode);
  };

  return (
    <div className="start-screen">
      <h1>Maze Game</h1>
      <div className="input-group">
        <label htmlFor="size">Size of maze (5-40):</label>
        <input
          id="size"
          type="number"
          value={size}
          onChange={handleSizeChange}
          min="5"
          max="40"
        />
      </div>
      <div className="input-group">
        <label htmlFor="cheatMode">Cheat mode:</label>
        <input
          id="cheatMode"
          type="checkbox"
          checked={cheatMode}
          onChange={handleCheatModeChange}
        />
        {cheatMode && (
          <span className="cheat-mode-info">
            Your results will not be saved!
          </span>
        )}
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default MazeStartScreen;
