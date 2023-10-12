import React, { useState, useEffect, useCallback } from "react";
import TicTacToeSquare from "./TicTacToeSquare";
import { easyAI, mediumAI, hardAI } from "./AI";

function TicTacToeBoard({ gameType, setGameType, playerNames, difficulty }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isTied, setIsTied] = useState(false);

  const checkWin = (board, player) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      if (
        board[combination[0]] === player &&
        board[combination[1]] === player &&
        board[combination[2]] === player
      ) {
        return true;
      }
    }
    return false;
  };

  const checkTie = (board) => {
    return board.every((square) => square);
  };

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
    <div>
      <div className="status">
        {winner
          ? `Winner: ${playerNames[winner === "X" ? "playerX" : "playerO"]}`
          : isTied
          ? "It's a Tie!"
          : `Next Player: ${
              playerNames[currentPlayer === "X" ? "playerX" : "playerO"]
            }`}
      </div>
      <div className="TicTacToeBoard">
        {board.map((value, index) => (
          <TicTacToeSquare key={index} value={value} onClick={() => makeMove(index)} />
        ))}
      </div>
      <div className="controls">
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
        <button className="back-button" onClick={() => setGameType(null)}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}

export default TicTacToeBoard;
