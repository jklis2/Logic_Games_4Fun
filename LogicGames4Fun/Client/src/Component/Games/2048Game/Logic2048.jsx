import React, { useState, useEffect } from "react";
import Board2048 from "./Board2048";

function Logic2048({ level, onReturnToStart }) {
  const [tiles, setTiles] = useState(initialState());
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [score, setScore] = useState(0);

  function getSizeForLevel(level) {
    switch (level) {
      case "medium":
        return 5;
      case "hard":
        return 6;
      default:
        return 4;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles]);

  function handleKeyDown(e) {
    if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(e.key)) {
      let newTiles = moveTiles(tiles, e.key);
      if (JSON.stringify(tiles) !== JSON.stringify(newTiles)) {
        newTiles = addRandomTile(newTiles);
        setTiles(newTiles);
        if (checkWin(newTiles)) {
          setHasWon(true);
        }
        if (checkLoss(newTiles)) {
          setHasLost(true);
        }
      }
    }
  }

  function resetGame() {
    setTiles(initialState());
    setHasWon(false);
    setHasLost(false);
    setScore(0);
  }

  function checkWin(tiles) {
    const size = getSizeForLevel(level);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (tiles[i][j].value === 2048) {
          return true;
        }
      }
    }
    return false;
  }

  function checkLoss(tiles) {
    const size = getSizeForLevel(level);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (tiles[i][j].value === 0) {
          return false;
        }
      }
    }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const tile = tiles[i][j];
        if (j < size - 1 && tile.value === tiles[i][j + 1].value) {
          return false;
        }
        if (i < size - 1 && tile.value === tiles[i + 1][j].value) {
          return false;
        }
      }
    }

    return true;
  }

  function initialState() {
    const size = getSizeForLevel(level);
    let tiles = Array(size)
      .fill(null)
      .map(() =>
        Array(size).fill({
          value: 0,
          merged: false,
          x: 0,
          y: 0,
          newTile: false,
        })
      );
    tiles = addRandomTile(tiles);
    tiles = addRandomTile(tiles);
    return tiles;
  }

  function moveTiles(tiles, direction) {
    let newScore = 0;
    const size = getSizeForLevel(level);

    let newTiles = tiles.map((row) =>
      row.map((tile) => ({
        ...tile,
        oldX: tile.x,
        oldY: tile.y,
        newTile: false,
      }))
    );

    const merge = (arr) => {
      let newArr = arr.filter((t) => t.value !== 0);
      for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i].value === newArr[i + 1].value) {
          newScore += newArr[i].value * 2;
          newArr[i] = {
            value: newArr[i].value * 2,
            merged: true,
            x: newArr[i].x,
            y: newArr[i].y,
            newTile: false,
          };
          newArr.splice(i + 1, 1);
        }
      }
      while (newArr.length < size) {
        newArr.push({ value: 0, merged: false, x: 0, y: 0, newTile: false });
      }
      return newArr;
    };

    if (direction === "ArrowRight") {
      newTiles = newTiles.map((row) => merge(row.reverse()).reverse());
    } else if (direction === "ArrowLeft") {
      newTiles = newTiles.map((row) => merge(row));
    } else if (direction === "ArrowUp") {
      for (let i = 0; i < size; i++) {
        const col = merge(
          Array.from({ length: size }, (_, k) => newTiles[k][i])
        );
        for (let j = 0; j < size; j++) {
          newTiles[j][i] = col[j];
        }
      }
    } else if (direction === "ArrowDown") {
      for (let i = 0; i < size; i++) {
        const col = merge(
          Array.from({ length: size }, (_, k) => newTiles[k][i]).reverse()
        ).reverse();
        for (let j = 0; j < size; j++) {
          newTiles[j][i] = col[j];
        }
      }
    }

    setScore((prevScore) => prevScore + newScore);
    return newTiles;
  }

  function addRandomTile(tiles) {
    let available = [];
    const size = getSizeForLevel(level);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (tiles[i][j].value === 0) {
          available.push({ x: i, y: j });
        }
      }
    }
    if (available.length === 0) return tiles;

    const randomPosition =
      available[Math.floor(Math.random() * available.length)];
    tiles[randomPosition.x][randomPosition.y] = {
      value: Math.random() < 0.9 ? 2 : 4,
      merged: false,
      x: randomPosition.x,
      y: randomPosition.y,
      newTile: true,
    };
    return tiles;
  }

  return (
    <>
      <div className="score-board score-board d-flex justify-content-center align-items-center">
        <span>Score: {score}</span>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Board2048 tiles={tiles} level={level}/>
      </div>
      {hasWon && <div className="win-message my-3 text-danger text-success">Congratulations! You won!</div>}
      {hasLost && <div className="loss-message my-3 text-danger text-center">You lost! Try again.</div>}
      <div className="d-flex justify-content-around fs-3 mx-4">
        <button className="mt-3 mb-5 button-light" onClick={resetGame}>
          Reset
        </button>
        <button className="mt-3 mb-5 button-light" onClick={onReturnToStart}>
          Back to menu
        </button>
      </div>
    </>
  );
}

export default Logic2048;
