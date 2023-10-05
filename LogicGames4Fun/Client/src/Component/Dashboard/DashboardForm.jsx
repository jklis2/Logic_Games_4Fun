import React from "react";
import styles from "./DashboardForm.module.scss";
import { Navbar } from "../Navbar/Navbar";
import DashboardFooter from "./DashboardFooter";
import { useNavigate } from "react-router-dom";
import { SudokuHowToPlayPop } from "./Pops/SudokuHowToPlayPop";
import { SudokuTipsPop } from "./Pops/SudokuTipsPop";
import { CrosswordHowToPlayPop } from "./Pops/CrosswordHowToPlayPop";
import { CrosswordTipsPop } from "./Pops/CrosswordTipsPop";
import { MemoryHowToPlayPop } from "./Pops/MemoryHowToPlayPop";
import { MemoryTipsPop } from "./Pops/MemoryTipsPop";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export const DashboardForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles["dashboard-page-conent"]}>
        <Navbar />
        <div className={styles["dashboard-games"]}>

          {/* Sudoku */}

          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <div className={styles["sudoku-logo-wrapper"]}>
                <div
                  className={`${styles["sudoku-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={SudokuHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={SudokuTipsPop}
                  >
                    <button className="button-light my-3">Tips</button>
                  </OverlayTrigger>
                  <button className="button-light my-3" onClick={() => navigate(`/games/sudoku`)}>Start game</button>
                </div>
                <img
                  className="logo-of-sudoku"
                  src={`${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`}
                  alt="Sudoku logo"
                ></img>
              </div>
            </div>
          </div>

          {/* Crossword */}

          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <div className={styles["crossword-logo-wrapper"]}>
                <div
                  className={`${styles["crossword-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={CrosswordHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={CrosswordTipsPop}
                  >
                    <button className="button-light my-3">Tips</button>
                  </OverlayTrigger>
                  <button className="button-light my-3">Start game</button>
                </div>
                <img
                  className="logo-of-crossword"
                  src={`${process.env.PUBLIC_URL}/GamesImages/CrosswordLogo.png`}
                  alt="Crossword logo"
                ></img>
              </div>
            </div>
          </div>

          {/* Memory */}

          <div className={styles["dashboard-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <div className={styles["memory-logo-wrapper"]}>
                <div
                  className={`${styles["memory-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryTipsPop}
                  >
                    <button className="button-light my-3">Tips</button>
                  </OverlayTrigger>
                  <button className="button-light my-3" onClick={() => navigate(`/games/memory`)}>Start game</button>
                </div>
                <img
                  className="logo-of-memory"
                  src={`${process.env.PUBLIC_URL}/GamesImages/MemoryLogo.png`}
                  alt="Memory logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={`${styles["dashboard-score-games"]} my-5`}>
            <div className={styles["score-games-title"]}>
              <h2>Score games</h2>
            </div>
            <div className={styles["score-game"]}>
            <div className="d-flex flex-center justify-content-center">
              <div className={styles["s2048-logo-wrapper"]}>
                <div
                  className={`${styles["s2048-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/2048`)}>Start game</button>
                </div>
                <img
                  className="logo-of-2048"
                  src={`${process.env.PUBLIC_URL}/GamesImages/2048Logo.png`}
                  alt="2048 logo"
                ></img>
              </div>
            </div>



            <div className="d-flex flex-center justify-content-center">
              <div className={styles["minesweeper-logo-wrapper"]}>
                <div
                  className={`${styles["minesweeper-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/minesweeper`)}>Start game</button>
                </div>
                <img
                  className="logo-of-minesweeper"
                  src={`${process.env.PUBLIC_URL}/GamesImages/MinesweeperLogo.png`}
                  alt="Minesweeper logo"
                ></img>
              </div>
            </div>



            <div className="d-flex flex-center justify-content-center">
              <div className={styles["snake-logo-wrapper"]}>
                <div
                  className={`${styles["snake-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/snake`)}>Start game</button>
                </div>
                <img
                  className="logo-of-snake"
                  src={`${process.env.PUBLIC_URL}/GamesImages/SnakeLogo.png`}
                  alt="Snake logo"
                ></img>
              </div>
            </div>



            <div className="d-flex flex-center justify-content-center">
              <div className={styles["maze-logo-wrapper"]}>
                <div
                  className={`${styles["maze-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/maze`)}>Start game</button>
                </div>
                <img
                  className="logo-of-maze"
                  src={`${process.env.PUBLIC_URL}/GamesImages/MazeLogo.png`}
                  alt="Maze logo"
                ></img>
              </div>
            </div>



            <div className="d-flex flex-center justify-content-center">
              <div className={styles["ballInTheHole-logo-wrapper"]}>
                <div
                  className={`${styles["ballInTheHole-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/ballInTheHole`)}>Start game</button>
                </div>
                <img
                  className="logo-of-ballInTheHole"
                  src={`${process.env.PUBLIC_URL}/GamesImages/BallInTheHoleLogo.png`}
                  alt="Ball In The Hole logo"
                ></img>
              </div>
            </div>



            <div className="d-flex flex-center justify-content-center">
              <div className={styles["quiz-logo-wrapper"]}>
                <div
                  className={`${styles["quiz-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/quiz`)}>Start game</button>
                </div>
                <img
                  className="logo-of-quiz"
                  src={`${process.env.PUBLIC_URL}/GamesImages/QuizLogo.png`}
                  alt="Quiz logo"
                ></img>
              </div>
            </div>



            <div className="d-flex flex-center justify-content-center">
              <div className={styles["ticTacToe-logo-wrapper"]}>
                <div
                  className={`${styles["ticTacToe-overlay"]} d-flex justify-content-center align-items-center flex-column`}
                >
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={MemoryHowToPlayPop}
                  >
                    <button className="button-light my-3">How to play?</button>
                  </OverlayTrigger>

                  <button className="button-light my-3" onClick={() => navigate(`/games/ticTacToe`)}>Start game</button>
                </div>
                <img
                  className="logo-of-ticTacToe"
                  src={`${process.env.PUBLIC_URL}/GamesImages/TicTacToeLogo.png`}
                  alt="TicTacToe logo"
                ></img>
              </div>
            </div>


            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};
