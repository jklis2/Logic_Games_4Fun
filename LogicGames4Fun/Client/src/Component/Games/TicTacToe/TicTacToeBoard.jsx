import React, { useState, useEffect, useCallback } from "react";
import TicTacToeSquare from "./TicTacToeSquare";
import { easyAI, mediumAI, hardAI } from "./utils/AI";
import { checkWin } from "./utils/checkWin";
import { checkTie } from "./utils/checkTie";
import { useTranslation } from "react-i18next";

function TicTacToeBoard({ gameType, setGameType, playerNames, difficulty }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isTied, setIsTied] = useState(false);

  const makeMove = useCallback(
    (index) => {
      if (!board[index] && !winner && !isTied) {
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        if (checkWin(newBoard, currentPlayer)) {
          setWinner(currentPlayer);
        } else if (checkTie(newBoard)) {
          setIsTied(true);
        } else {
          setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
      }
    },
    [board, currentPlayer, winner, isTied]
  );
  const [t] = useTranslation(["translation", "ticTacToe"]);
  useEffect(() => {
    if (gameType === "single" && currentPlayer === "O" && !winner && !isTied) {
      setTimeout(() => {
        let move;
        if (difficulty === "easy") {
          move = easyAI(board);
        } else if (difficulty === "medium") {
          move = mediumAI(board);
        } else {
          move = hardAI(board);
        }
        makeMove(move);
      }, 500);
    }
  }, [currentPlayer, board, difficulty, gameType, makeMove, winner, isTied]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsTied(false);
  };

  return (
    <div className="difficulty-card bg-light d-flex flex-column align-items-center tictactoe">
      <div className="tictactoe__status my-3">
        {winner
          ? `${t("ticTacToe.winnerMessage")} ${
              playerNames[winner === "X" ? "playerX" : "playerO"]
            }`
          : isTied
          ? `${t("ticTacToe.tieMessage")}`
          : `${t("ticTacToe.nextPlayerMessage")} ${
              playerNames[currentPlayer === "X" ? "playerX" : "playerO"]
            }`}
      </div>
      <div className="tictactoe__board">
        {board.map((value, index) => (
          <TicTacToeSquare
            key={index}
            value={value}
            onClick={() => makeMove(index)}
          />
        ))}
      </div>
      <div className="mt-5 d-flex ">
        <button className="button-light" onClick={resetGame}>
          {t("ticTacToe.resetGameButton")}
        </button>
        <button className="button-light ms-2" onClick={() => setGameType(null)}>
          {t("ticTacToe.backToMenuButton")}
        </button>
      </div>
    </div>
  );
}

export default TicTacToeBoard;
