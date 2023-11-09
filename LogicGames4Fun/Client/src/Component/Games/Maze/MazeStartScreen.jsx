import React, { useState } from "react";
import { MazeDifficultyMenu } from "../../DifficultyMenus/MazeDifficultyMenu";
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
      <MazeDifficultyMenu 
      size={size}
      onChangeSize={handleSizeChange}
      cheatMode={cheatMode}
      onSelectCheatMode = {handleCheatModeChange}
      onGameStart={handleStartGame}
      />
    </div>
  );
};

export default MazeStartScreen;
