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
