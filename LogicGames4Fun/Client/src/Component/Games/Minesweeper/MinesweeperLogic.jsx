import React, { useState } from "react";
import { DIFFICULTIES } from "./minesweeperDifficulties";
import {
  placeMines,
  calculateNeighborMines,
  revealCell,
  toggleFlag,
  checkGameOver,
  revealAllMines,
} from "./minesweepersHelpers"
import MinesweeperBoard from "./MinesweeperBoard";

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

  const resetBoard = () => {
    setBoard(initializeBoard(DIFFICULTIES[difficulty]));
    setFlagsPlaced(0);
    setGameStatus("ongoing");
  };

  const minesLeft = DIFFICULTIES[difficulty].mines - flagsPlaced;

  return (
    <div className="custom-div">
      <select
        className="custom-select"
        value={difficulty}
        onChange={handleDifficultyChange}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className="reset-button" onClick={resetBoard}>
        Reset
      </button>
      <div className="custom-div">Mines left: {minesLeft}</div>
      {gameStatus === "lost" && <p>Game Over! Click "Reset" to play again.</p>}
      {gameStatus === "won" && (
        <p>Congratulations! You won! Click "Reset" to play again.</p>
      )}
      <MinesweeperBoard
        board={board}
        onCellClick={handleCellClick}
        onCellRightClick={handleCellRightClick}
      />
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
