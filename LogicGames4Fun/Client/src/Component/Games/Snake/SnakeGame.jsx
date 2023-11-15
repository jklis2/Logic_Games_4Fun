import React, { useState, useEffect, useCallback } from "react";
import SnakeBoard from "./SnakeBoard";
import SnakeControls from "./SnakeControls";

const numRows = 20;
const numCols = 20;
const cellSize = 25;
const directions = {
  ArrowUp: [-1, 0],
  ArrowDown: [1, 0],
  ArrowLeft: [0, -1],
  ArrowRight: [0, 1],
};

const difficultySpeeds = {
  easy: 250,
  medium: 150,
  hard: 75,
};

export const SnakeGame = () => {
  const [snake, setSnake] = useState([{ row: 10, col: 10 }]);
  const [dir, setDir] = useState("ArrowRight");
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [isGameStarted, setIsGameStarted] = useState(false);

  function generateSingleFood() {
    let foodPosition;
    while (true) {
      foodPosition = {
        row: Math.floor(Math.random() * numRows),
        col: Math.floor(Math.random() * numCols),
      };
      // eslint-disable-next-line no-loop-func
      if (
        !snake.some(
          // eslint-disable-next-line no-loop-func
          (s) => s.row === foodPosition.row && s.col === foodPosition.col
        )
      ) {
        break;
      }
    }
    return foodPosition;
  }

  function generateFoods() {
    const foodCounts = {
      easy: 1,
      medium: 3,
      hard: 5,
    };
    const numberOfFoods = foodCounts[difficulty];
    const foodsArray = [];
    for (let i = 0; i < numberOfFoods; i++) {
      foodsArray.push(generateSingleFood());
    }
    return foodsArray;
  }

  const [foods, setFoods] = useState(generateFoods());

  const moveSnake = useCallback(() => {
    const [dirRow, dirCol] = directions[dir];
    const newHead = {
      row: snake[0].row + dirRow,
      col: snake[0].col + dirCol,
    };

    if (
      newHead.row < 0 ||
      newHead.col < 0 ||
      newHead.row >= numRows ||
      newHead.col >= numCols
    ) {
      setIsGameOver(true);
      return;
    }

    for (let i = 0; i < snake.length; i++) {
      if (snake[i].row === newHead.row && snake[i].col === newHead.col) {
        setIsGameOver(true);
        return;
      }
    }

    let eatenFoodIndex = -1;
    for (let i = 0; i < foods.length; i++) {
      if (foods[i].row === newHead.row && foods[i].col === newHead.col) {
        eatenFoodIndex = i;
        break;
      }
    }

    if (eatenFoodIndex !== -1) {
      setScore(score + 1);
      const newFoods = [...foods];
      newFoods[eatenFoodIndex] = generateSingleFood();
      setFoods(newFoods);
    } else {
      snake.pop();
    }

    setSnake([newHead, ...snake]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dir, snake, foods]);

  const restartGame = () => {
    setIsGameOver(false);
    setScore(0);
    setSnake([{ row: 10, col: 10 }]);
    setDir("ArrowRight");
    setFoods(generateFoods());
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (directions[e.key]) {
        setDir(e.key);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    const gameInterval = setInterval(() => {
      if (!isGameOver) {
        moveSnake();
      }
    }, difficultySpeeds[difficulty]);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      clearInterval(gameInterval);
    };
  }, [isGameOver, moveSnake, difficulty]);

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center">
      {isGameStarted ? (
        <div className="container d-flex flex-column align-items-center">
          <div className="h100 m my-3 p-4 d-flex flex-column justify-content-center align-items-center bg-light snake-board ">
            <h2 className="fs-1">Score: {score}</h2>
            {isGameOver ? (
              <h1>Game Over!</h1>
            ) : (
              <SnakeBoard
                snake={snake}
                foods={foods}
                cellSize={cellSize}
                numCols={numCols}
                numRows={numRows}
              />
            )}

            <SnakeControls
              isGameStarted={isGameStarted}
              difficulty={difficulty}
              onGameStart={() => {
                setIsGameStarted(true);
                restartGame();
              }}
              onGameRestart={restartGame}
              onMenuReturn={() => setIsGameStarted(false)}
              onDifficultyChange={(e) => setDifficulty(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <SnakeControls
            isGameStarted={isGameStarted}
            difficulty={difficulty}
            onGameStart={() => {
              setIsGameStarted(true);
              restartGame();
            }}
            onGameRestart={restartGame}
            onMenuReturn={() => setIsGameStarted(false)}
            onDifficultyChange={(e) => setDifficulty(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
