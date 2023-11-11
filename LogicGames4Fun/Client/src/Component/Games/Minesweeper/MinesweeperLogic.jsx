import React, { useState } from "react";
import { DIFFICULTIES } from "./minesweeperDifficulties";
import {
  placeMines,
  calculateNeighborMines,
  revealCell,
  toggleFlag,
  checkGameOver,
  revealAllMines,
} from "./minesweepersHelpers";
import MinesweeperBoard from "./MinesweeperBoard";
import MinesweeperStartScreen from "./MinesweeperStartScreen";

const MinesweeperLogic = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [board, setBoard] = useState(initializeBoard(DIFFICULTIES[difficulty]));
  const [flagsPlaced, setFlagsPlaced] = useState(0);
  const [gameStatus, setGameStatus] = useState("ongoing");

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
    setBoard(initializeBoard(DIFFICULTIES[event.target.value]));
    setFlagsPlaced(0);
    setGameStatus("ongoing");
  };

  const handleCellClick = (row, col) => {
    if (gameStatus !== "ongoing") return;
    if (board[row][col].isFlagged || board[row][col].isRevealed) return;

    let newBoard = revealCell(board, row, col);
    if (newBoard[row][col].isMine) {
      newBoard = revealAllMines(newBoard);
      setGameStatus("lost");
      alert("Boom! You hit a mine!");
    } else {
      const status = checkGameOver(newBoard);
      if (status === "won") {
        setGameStatus("won");
        alert("Congratulations! You won!");
      }
    }
    setBoard(newBoard);
  };

  const handleCellRightClick = (row, col) => {
    if (gameStatus !== "ongoing") return;
    if (board[row][col].isRevealed) return;

    if (
      board[row][col].isFlagged ||
      flagsPlaced < DIFFICULTIES[difficulty].mines
    ) {
      const newBoard = toggleFlag([...board], row, col);
      setBoard(newBoard);
      setFlagsPlaced((prevFlags) =>
        newBoard[row][col].isFlagged ? prevFlags + 1 : prevFlags - 1
      );
    }
  };

  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleStartGame = () => {
    setShowStartScreen(false);
  };

  const resetBoard = () => {
    setBoard(initializeBoard(DIFFICULTIES[difficulty]));
    setFlagsPlaced(0);
    setGameStatus("ongoing");
  };

  const handleBackToMenu = () => {
    setShowStartScreen(true);
    resetBoard();
  };

  const minesLeft = DIFFICULTIES[difficulty].mines - flagsPlaced;

  return (
    <div className="custom-div">
      {showStartScreen ? (
        <MinesweeperStartScreen
          onStart={handleStartGame}
          onDifficultyChange={handleDifficultyChange}
          difficulty={difficulty}
        />
      ) : (
        <>
          <div className="mines-left-display">Mines left: {minesLeft}</div>
          <MinesweeperBoard
            board={board}
            onCellClick={handleCellClick}
            onCellRightClick={handleCellRightClick}
          />
          <div className="button-group">
            <button className="reset-button" onClick={resetBoard}>
              Reset
            </button>
            <button className="back-to-menu-button" onClick={handleBackToMenu}>
              Back to Menu
            </button>
          </div>
          {gameStatus === "lost" && (
            <p>Game Over! Click "Reset" to play again.</p>
          )}
          {gameStatus === "won" && (
            <p>Congratulations! You won! Click "Reset" to play again.</p>
          )}
        </>
      )}
    </div>
  );
};

function initializeBoard(config) {
  const board = Array.from({ length: config.rows }, () =>
    Array.from({ length: config.cols }, () => ({
      isRevealed: false,
      isMine: false,
      isFlagged: false,
      neighborMineCount: 0,
    }))
  );

  placeMines(board, config.mines);
  calculateNeighborMines(board);

  return board;
}

export default MinesweeperLogic;
