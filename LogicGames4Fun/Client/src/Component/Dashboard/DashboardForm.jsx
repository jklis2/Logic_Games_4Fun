import React from "react";
import styles from "./DashboardForm.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { Fab } from "@mui/material";
import DashboardFooter from "./DashboardFooter";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { sudokuActions } from "../../Redux/sudoku-slice";

export const DashboardForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //If level not exists redirect to dashboard 

  const runGame = (lvl, game) => {
    dispatch(sudokuActions.selectLevel({lvl}))
    navigate(`/games/${game}`)
  }

  const generateLevels = function (minLevel, maxLevel, game) {
    const levels = [];
    for (let lvl = minLevel; lvl < maxLevel; lvl++) {
      levels.push(
        <Fab
          key={lvl}
          variant="extended"
          size="small"
          sx={{
            bgcolor: "rgb(255, 255, 255, 0.0)",
            margin: { xs: "8px", md: "10px" },
          }}
          aria-label="add"
        >
          
          <span onClick={() => runGame(lvl, game)}>{lvl}</span>
        </Fab>
      );
    }
    return levels;
  };

  return (
    <>
      <div className={styles["dashboard-page-conent"]}>
        <Navbar />
        <div className={styles["dashboard-games"]}>
          {/* Sudoku */}
          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`}
                alt="Sudoku logo"
              ></img>
            </div>

            <Carousel
              interval={null}
              className="d-flex align-items-center"
              variant="dark"
              keyboard="true"
              indicators={false}
              fade
              slide={false}
            >
              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Easy levels</h2>
                  </div>
                  <div>{generateLevels(1, 26, 'sudoku')}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Medium levels</h2>
                  </div>
                  <div>{generateLevels(26, 51, 'sudoku')}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Hard levels</h2>
                  </div>
                  <div>{generateLevels(51, 76, 'sudoku')}</div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Crossword */}

          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/CrosswordLogo.png`}
                alt="Crossword logo"
              ></img>
            </div>

            <Carousel
              interval={null}
              className="d-flex align-items-center"
              variant="dark"
              keyboard="true"
              indicators={false}
              fade
              slide={false}
            >
              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Easy levels</h2>
                  </div>
                  <div>{generateLevels(1, 26)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Medium levels</h2>
                  </div>
                  <div>{generateLevels(26, 51)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Hard levels</h2>
                  </div>
                  <div>{generateLevels(51, 76)}</div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Puzzle */}

          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/PuzzleLogo.png`}
                alt="Puzzle logo"
              ></img>
            </div>

            <Carousel
              interval={null}
              className="d-flex align-items-center"
              variant="dark"
              keyboard="true"
              indicators={false}
              fade
              slide={false}
            >
              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Easy levels</h2>
                  </div>
                  <div>{generateLevels(1, 26)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Medium levels</h2>
                  </div>
                  <div>{generateLevels(26, 51)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Hard levels</h2>
                  </div>
                  <div>{generateLevels(51, 76)}</div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Memory */}

          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/MemoryLogo.png`}
                alt="Memory logo"
              ></img>
            </div>

            <Carousel
              interval={null}
              className="d-flex align-items-center"
              variant="dark"
              keyboard="true"
              indicators={false}
              fade
              slide={false}
            >
              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Easy levels</h2>
                  </div>
                  <div>{generateLevels(1, 26, 'memory')}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Medium levels</h2>
                  </div>
                  <div>{generateLevels(26, 51, 'memory')}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Hard levels</h2>
                  </div>
                  <div>{generateLevels(51, 76, 'memory')}</div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div>
          <div className={styles["dashboard-score-games"]}>
            <div className={styles["score-games-title"]}>
              <h2>Score games</h2>
            </div>
            <div className={styles["score-game"]}>
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/BallInTheHoleLogo.png`}
                alt="Ball in the hole Game"
              ></img>

              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/QuizLogo.png`}
                alt="Quiz Game"
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/SnakeLogo.png`}
                alt="Snake Game"
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/GamesImages/TicTacToeLogo.png`}
                alt="Tic Tac Toe Game"
              ></img>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};
