import React, { useState } from "react";
import { DIFFICULTIES } from "./utils/minesweeperDifficulties";
import {
  revealCell,
  toggleFlag,
  checkGameOver,
  revealAllMines,
} from "./utils/minesweepersHelpers";
import MinesweeperBoard from "./MinesweeperBoard";
import { initializeBoard } from "./utils/initializeBoard";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";
import { useTranslation } from "react-i18next";

export const MinesweeperGame = () => {
  const [t] = useTranslation(["translation", "minesweeper"]);
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
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      {showStartScreen ? (
        <DifficultyMenu
          gameName="Minesweeper"
          diffList={["easy", "medium", "hard"]}
          initialDiff={difficulty}
          onDiffChange={handleDifficultyChange}
          onGameStart={handleStartGame}
        />
      ) : (
        <div className="difficulty-card d-flex flex-column align-items-center bg-light ">
          <div className="fs-3 mb-3">
            {t("minesweeper.minesLeftLabel")} {minesLeft}
          </div>
          <MinesweeperBoard
            board={board}
            onCellClick={handleCellClick}
            onCellRightClick={handleCellRightClick}
          />
          <div className="button-group mt-3 d-flex justify-content-center">
            <button className="button-light" onClick={resetBoard}>
              {t("minesweeper.resetButton")}
            </button>
            <button className="button-light ms-2" onClick={handleBackToMenu}>
              {t("minesweeper.backToMenuButton")}
            </button>
          </div>
          {gameStatus === "lost" && <p>{t("minesweeper.gameOverMessage")}</p>}
          {gameStatus === "won" && (
            <p>{t("minesweeper.congratulationsMessage")}</p>
          )}
        </div>
      )}
    </div>
  );
};
