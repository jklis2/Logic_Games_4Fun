import React, { useEffect, useState } from "react";
import { generateHoles } from "./utils/generateHoles";
import MathOperation from "./MathOperationBallInTheHole";
import { generateMathOperation } from "./utils/generateMathOperation";
import { DifficultyMenu } from "../../DifficultyMenus/DifficultyMenu";

const BallInTheHoleGame = () => {
  const difficultyList = ["easy", "medium", "hard", "impossible"];
  const [ballPosition, setBallPosition] = useState({ top: 250, left: 250 });
  const [holes, setHoles] = useState([]);
  const [game, setGame] = useState(false);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [directions, setDirections] = useState({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });
  const [mathResult, setMathResult] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const maxX = 480;
  const maxY = 480;
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (directions[event.key] !== undefined) {
        setDirections((prevDirections) => {
          const newDirections = { ...prevDirections, [event.key]: true };
          return newDirections;
        });
      }
    };

    const handleKeyUp = (event) => {
      if (directions[event.key] !== undefined) {
        setDirections((prevDirections) => {
          const newDirections = { ...prevDirections, [event.key]: false };
          return newDirections;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [directions]);

  useEffect(() => {
    const onDeviceMove = (e) => {
      let x = e.beta;
      let y = e.gamma;

      if (x > 90) {
        x = 90;
      }
      if (x < -90) {
        x = -90;
      }

      x += 90;
      y += 90;

      handleBallMovement({
        top: (maxY * y) / 180,
        left: (maxX * x) / 180,
      });
    };

    if (game) {
      window.addEventListener("deviceorientation", onDeviceMove);
      const timerId = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
      setTimerId(timerId);
    }

    return () => {
      window.removeEventListener("deviceorientation", onDeviceMove);
      clearInterval(timerId);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game]);

  const handleBallMovement = (newBallPosition) => {
    const speed = 5;
    newBallPosition = { ...newBallPosition };
    if (directions.ArrowUp) {
      newBallPosition.top = Math.max(newBallPosition.top - speed, 0);
    }
    if (directions.ArrowDown) {
      newBallPosition.top = Math.min(newBallPosition.top + speed, maxY);
    }
    if (directions.ArrowLeft) {
      newBallPosition.left = Math.max(newBallPosition.left - speed, 0);
    }
    if (directions.ArrowRight) {
      newBallPosition.left = Math.min(newBallPosition.left + speed, maxX);
    }

    const holeHitIndex = holes.findIndex((hole) => {
      const dx = newBallPosition.left - hole.left;
      const dy = newBallPosition.top - hole.top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < 20;
    });

    if (holeHitIndex !== -1) {
      if (holes[holeHitIndex].result === mathResult) {
        setScore((prevScore) => prevScore + 1);
      } else {
        alert(`You have lost. Your result is: ${score}`);
        setGame(false);
    resetGameState(); 
      }
      setTrigger((prev) => prev + 1);
      const newHoles = generateHoles(
        holes.length,
        maxX,
        maxY,
        10,
        40,
        mathResult,
        difficulty
      );
      setHoles(newHoles);
    }
    setBallPosition(newBallPosition);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleBallMovement(ballPosition);
    }, 1000 / 60);

    return () => {
      clearInterval(intervalId);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ballPosition, directions]);

const resetGameState = () => {
  setBallPosition({ top: 250, left: 250 }); 
  setDirections({                           
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });
  setScore(0);
};
const startGame = () => {
    setGame(true);
    setTime(0);
    let holesCount;
    switch (difficulty) {
      case "easy":
        holesCount = 4;
        break;
      case "medium":
        holesCount = 6;
        break;
      case "hard":
        holesCount = 8;
        break;
      case "impossible":
        holesCount = 10;
        break;
      default:
        holesCount = 4;
    }

    const mathOperation = generateMathOperation(difficulty);
    const holes = generateHoles(
      holesCount,
      maxX,
      maxY,
      10,
      40,
      mathOperation.result,
      difficulty
    );

    setHoles(holes);
    setMathResult(mathOperation.result);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  useEffect(() => {
    if (mathResult !== null) {
      let holesCount;
      switch (difficulty) {
        case "easy":
          holesCount = 4;
          break;
        case "medium":
          holesCount = 6;
          break;
        case "hard":
          holesCount = 8;
          break;
        case "impossible":
          holesCount = 10;
          break;
        default:
          holesCount = 4;
      }

      const padding = 10;
      const holeSize = 40;

      const newHoles = generateHoles(
        holesCount,
        maxX,
        maxY,
        padding,
        holeSize,
        mathResult,
        difficulty
      );
      setHoles(newHoles);
    }
  }, [mathResult, difficulty, maxX, maxY]);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      {!game ? (
        <DifficultyMenu
          gameName="Ball in the hole"
          diffList={difficultyList}
          initialDiff={difficulty}
          onGameStart={startGame}
          onDiffChange={(e) => setDifficulty(e.target.value)}
        />
      ) : (
        <div className="difficulty-card ball-in-the-hole text-center bg-light p-5 fs-4">
          <div className="ball-in-the-hole__time mb-2">
            Time: {formatTime(time)}
          </div>
          <div className="ball-in-the-hole__score mb-2">Score: {score}</div>
          <MathOperation
            difficulty={difficulty}
            setMathResult={setMathResult}
            trigger={trigger}
          />
          <div className="ball-in-the-hole__field">
            <img
              src={`${process.env.PUBLIC_URL}/BallInTheHoleElements/Ball.png`} 
              alt="Ball"
              className="ball-in-the-hole__ball"
              style={{
                top: ballPosition.top + "px",
                left: ballPosition.left + "px",
                position: 'absolute'
              }}
            />
            {holes.map((hole, index) => (
              <div
                key={index}
                className="ball-in-the-hole__hole-container"
                style={{ top: hole.top + "px", left: hole.left + "px", position: 'absolute' }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/BallInTheHoleElements/Hole.png`}
                  alt="Hole"
                  className="ball-in-the-hole__hole"
                />
                {hole.result !== null && (
                  <span className="ball-in-the-hole__result text-danger">
                    {hole.result}
                  </span>
                )}
              </div>
            ))}
          </div>
          <button className="button-light mt-3" onClick={() => setGame(false)}>
            End Game
          </button>
        </div>
      )}
    </div>
  );
  
};

export default BallInTheHoleGame;
