import React from "react";
import styles from "./DashboardForm.module.scss";
import { Navbar } from "../Navbar/Navbar";
import DashboardFooter from "./DashboardFooter";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import generateLevels from "./generateLevels";

export const DashboardForm = () => {
  const navigate = useNavigate();

  const runGame = (lvl, game) => {
    if(game === 'sudoku') localStorage.setItem("sudokuLvl", lvl.toString());
    if(game === 'memory') localStorage.setItem('memoryLvl', lvl.toString());
    navigate(`/games/${game}`)
  }

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
                  <div>{generateLevels(1, 26, 'sudoku', runGame)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Medium levels</h2>
                  </div>
                  <div>{generateLevels(26, 51, 'sudoku', runGame)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Hard levels</h2>
                  </div>
                  <div>{generateLevels(51, 76, 'sudoku', runGame)}</div>
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
                  <div>{generateLevels(1, 26, 'memory', runGame)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Medium levels</h2>
                  </div>
                  <div>{generateLevels(26, 51, 'memory', runGame)}</div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="w-100 d-flex justify-content-center  flex-center text-center">
                <div className="w-75 d-block">
                  <div>
                    <h2>Hard levels</h2>
                  </div>
                  <div>{generateLevels(51, 76, 'memory', runGame)}</div>
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
