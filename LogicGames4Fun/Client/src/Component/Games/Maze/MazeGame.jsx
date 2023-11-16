import { useState, useMemo, useEffect, useRef } from "react";
import { generateMaze, solve } from "./MazeUtils";
import MazeStartScreen from "./MazeStartScreen";

export default function MazeGame() {
  const [gameId, setGameId] = useState(1);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [status, setStatus] = useState("playing");
  const [touchStart, setTouchStart] = useState({ x: null, y: null });
  const [touchEnd, setTouchEnd] = useState({ x: null, y: null });
  const swipeThreshold = 50;
  const [size, setSize] = useState(10);
  const [cheatMode, setCheatMode] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [userPosition, setUserPosition] = useState([0, 0]);
  const handleStart = (newSize, newCheatMode) => {
    setSize(newSize);
    setCheatMode(newCheatMode);
    setUserPosition([0, 0]);
    setStatus("playing");
    setGameId((prevId) => prevId + 1);
    setShowStartScreen(false);
    setMoveCount(0);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const maze = useMemo(() => generateMaze(size, size), [size, gameId]);
  const solution = useMemo(() => {
    const s = new Set();
    const solutionPath = solve(maze, userPosition[0], userPosition[1]);
    solutionPath.forEach((path) => {
      const [x, y] = path;
      s.add(String(x) + "-" + String(y));
    });
    return s;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, userPosition[0], userPosition[1], gameId]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;
    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex) {
      setStatus("won");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPosition[0], userPosition[1]]);

  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }

    if (cheatMode && solution.has(String(i) + "-" + String(j))) {
      arr.push("sol");
    }
    return arr.join(" ");
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0];
    setTouchStart({
      x: touchDown.clientX,
      y: touchDown.clientY,
    });
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    const touchDown = e.touches[0];
    setTouchEnd({
      x: touchDown.clientX,
      y: touchDown.clientY,
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.x || !touchStart.y) {
      return;
    }

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;

    let direction = "";

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      direction = distanceX > swipeThreshold ? "left" : "right";
    } else {
      direction = distanceY > swipeThreshold ? "up" : "down";
    }

    handleMove(direction);
    setTouchStart({ x: null, y: null });
    setTouchEnd({ x: null, y: null });
    e.preventDefault();
  };

  const handleMove = (directionOrEvent) => {
    if (directionOrEvent.preventDefault) {
      directionOrEvent.preventDefault();
    }

    if (status !== "playing") {
      return;
    }

    let direction = "";
    if (typeof directionOrEvent === "string") {
      direction = directionOrEvent;
    } else {
      const key = directionOrEvent.code;
      if (key === "ArrowUp" || key === "KeyW") {
        direction = "up";
      } else if (key === "ArrowRight" || key === "KeyD") {
        direction = "right";
      } else if (key === "ArrowDown" || key === "KeyS") {
        direction = "down";
      } else if (key === "ArrowLeft" || key === "KeyA") {
        direction = "left";
      }
    }

    const [i, j] = userPosition;
    let newI = i,
      newJ = j;

    if (direction === "up" && maze[i][j][0] === 1) {
      newI -= 1;
    } else if (direction === "right" && maze[i][j][1] === 1) {
      newJ += 1;
    } else if (direction === "down" && maze[i][j][2] === 1) {
      newI += 1;
    } else if (direction === "left" && maze[i][j][3] === 1) {
      newJ -= 1;
    }

    if (newI >= 0 && newI < maze.length && newJ >= 0 && newJ < maze[0].length) {
      setUserPosition([newI, newJ]);
      setMoveCount((prevCount) => prevCount + 1);
    }
  };

  const gameAreaRef = useRef(null);

  useEffect(() => {
    if (!showStartScreen && gameAreaRef.current) {
      gameAreaRef.current.focus();
    }
  }, [showStartScreen, gameId]);

  function resetGame() {
    setUserPosition([0, 0]);
    setStatus("playing");
    setGameId((prevId) => prevId + 1);
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
    }
    setMoveCount(0);
  }

  const getDifficultyLevel = (size) => {
    if (size >= 5 && size <= 11) {
      return "easy";
    } else if (size >= 12 && size <= 18) {
      return "medium";
    } else if (size >= 19 && size <= 25) {
      return "hard";
    } else if (size >= 26 && size <= 32) {
      return "extreme";
    } else if (size >= 33 && size <= 40) {
      return "impossible";
    } else {
      return "unknown";
    }
  };

  const difficulty = getDifficultyLevel(size);

  return (
    <>
      {showStartScreen ? (
        <>
          <MazeStartScreen onStart={handleStart} />
        </>
      ) : (
        <div
          className="difficulty-card d-flex align-items-center flex-column bg-light"
          ref={gameAreaRef}
          onKeyDown={handleMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={-1}
        >
          <div className="status-message">
            {status === "won" ? (
              <>
                <div>Congratulations! The rabbit won't starve to death.</div>
                <div>
                  Your score on {difficulty} level is: {moveCount} moves.
                </div>
              </>
            ) : (
              "Feed the rabbit"
            )}
          </div>
          <table id="maze">
            <tbody>
              {maze.map((row, i) => (
                <tr key={`row-${i}`}>
                  {row.map((cell, j) => {
                    const isEndCell =
                      i === maze.length - 1 && j === maze[0].length - 1;
                    const isPlayerCell =
                      i === userPosition[0] && j === userPosition[1];
                    const isInSolution =
                      cheatMode && solution.has(String(i) + "-" + String(j));
                    let cellContent = null;
                    if (isPlayerCell) {
                      cellContent = "🐇";
                    } else if (isEndCell && status !== "won") {
                      cellContent = "🥕";
                    } else if (isInSolution) {
                      cellContent = <div className="solution" />;
                    }
                    return (
                      <td
                        key={`cell-${i}-${j}`}
                        className={makeClassName(i, j)}
                      >
                        {cellContent}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3">
            <button
              className="button-light"
              onClick={() => setShowStartScreen(true)}
            >
              Back to Menu
            </button>
            <button className="button-light" onClick={resetGame}>
              Reset Game
            </button>
          </div>
        </div>
      )}
    </>
  );
}
