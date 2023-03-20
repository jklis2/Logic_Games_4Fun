import React from "react";
import styles from "./DashboardForm.module.css";
import { Navbar } from "../Navbar/Navbar";
import { Fab } from "@mui/material";
import DashboardFooter from "./DashboardFooter";

export const DashboardForm = () => {

  const generateLevels = function (minLevel, maxLevel) {
    const levels = [];
    for (let lvl = minLevel; lvl < maxLevel; lvl++) {
      levels.push(
        <Fab
          key = {lvl}
          variant="extended"
          size="small"
          sx={{ 
            bgcolor: "rgb(255, 255, 255, 0.0)", margin: "10px" }}
          aria-label="add"
        >
          {lvl}
        </Fab>
      );
    }
    return levels;
  };

  return (
    <>
      <div id={styles["dashboard-page-conent"]}>
        <Navbar />
        <div id={styles["game-level-text"]}>
          <div className={styles["easy-text"]}>
            <h2>Easy levels</h2>
          </div>
          <div className={styles["medium-text"]}>
            <h2>Medium levels</h2>
          </div>
          <div className={styles["hard-text"]}>
            <h2>Hard levels</h2>
          </div>
        </div>
        <div id={styles["dashboard-level-games"]}>
          {/* Sudoku */}
          <div className={styles["logo-sudoku"]}>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`}
              alt="Sudoku logo"
            ></img>
          </div>
          <div className={styles["easy-sudoku"]}>{generateLevels(1, 26)}</div>
          <div className={styles["medium-sudoku"]}>{generateLevels(26, 51)}</div>
          <div className={styles["hard-sudoku"]}>{generateLevels(51, 76)}</div>
          {/* Crossword */}
          <div className={styles["logo-crossword"]}>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/CrosswordLogo.png`}
              alt="Crossword logo"
            ></img>
          </div>
          <div className={styles["easy-crossword"]}>{generateLevels(1, 26)}</div>
          <div className={styles["medium-crossword"]}>{generateLevels(26, 51)}</div>
          <div className={styles["hard-crossword"]}>{generateLevels(51, 76)}</div>
          {/* Puzzle */}
          <div className={styles["logo-puzzle"]}>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/PuzzleLogo.png`}
              alt="Puzzle logo"
            ></img>
          </div>
          <div className={styles["easy-puzzle"]}>{generateLevels(1, 26)}</div>
          <div className={styles["medium-puzzle"]}>{generateLevels(26, 51)}</div>
          <div className={styles["hard-puzzle"]}>{generateLevels(51, 76)}</div>
          {/* Quiz */}
          <div className={styles["logo-quiz"]}>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/QuizLogo.png`}
              alt="Quiz logo"
            ></img>
          </div>
          <div className={styles["easy-quiz"]}>{generateLevels(1, 26)}</div>
          <div className={styles["medium-quiz"]}>{generateLevels(26, 51)}</div>
          <div className={styles["hard-quiz"]}>{generateLevels(51, 76)}</div>
        </div>

        <div id={styles["dashboard-score-games"]}>
          <div className={styles["score-games-title"]}>
            <h2>Score games</h2>
          </div>
          <div id={styles["score-games-logo"]}>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/BallInTheHoleLogo.png`}
              alt="Ball in the hole Game"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/CanvasLogo.png`}
              alt="Canvas Game"
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
        <DashboardFooter/>
      </div>
    </>
  );
};
