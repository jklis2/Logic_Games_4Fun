import React from "react";
import "../CSS/DashboardForm.css";
import { Navbar } from "../Navbar/Navbar";
import { Fab } from "@mui/material";

export const DashboardForm = () => {
  const generateLevels = function (minLevel, maxLevel) {
    const levels = [];
    for (let lvl = minLevel; lvl < maxLevel; lvl++) {
      levels.push(
        <Fab
          variant="extended"
          size="small"
          sx={{ bgcolor: "rgb(255, 255, 255, 0.0)" }}
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
      <div id="dashboard-page-conent">
        <Navbar />
        <div id="game-level-text">
          <div className="easy-text">
            <h>Easy levels</h>
          </div>
          <div className="medium-text">
            <h>Medium levels</h>
          </div>
          <div className="hard-text">
            <h>Hard levels</h>
          </div>
        </div>
        <div id="dashboard-level-games">
          {/* Sudoku */}
          <div className="logo-sudoku">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`}
              alt="Sudoku logo"
            ></img>
          </div>
          <div className="easy-sudoku">{generateLevels(1, 26)}</div>
          <div className="medium-sudoku">{generateLevels(26, 51)}</div>
          <div className="hard-sudoku">{generateLevels(51, 76)}</div>
          {/* Crossword */}
          <div className="logo-crossword">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/CrosswordLogo.png`}
              alt="Crossword logo"
            ></img>
          </div>
          <div className="easy-crossword">{generateLevels(1, 26)}</div>
          <div className="medium-crossword">{generateLevels(26, 51)}</div>
          <div className="hard-crossword">{generateLevels(51, 76)}</div>
          {/* Puzzle */}
          <div className="logo-puzzle">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/PuzzleLogo.png`}
              alt="Puzzle logo"
            ></img>
          </div>
          <div className="easy-puzzle">{generateLevels(1, 26)}</div>
          <div className="medium-puzzle">{generateLevels(26, 51)}</div>
          <div className="hard-puzzle">{generateLevels(51, 76)}</div>
          {/* Quiz */}
          <div className="logo-quiz">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/QuizLogo.png`}
              alt="Quiz logo"
            ></img>
          </div>
          <div className="easy-quiz">{generateLevels(1, 26)}</div>
          <div className="medium-quiz">{generateLevels(26, 51)}</div>
          <div className="hard-quiz">{generateLevels(51, 76)}</div>
        </div>

        <div id="dashboard-score-games">
          <div className="score-games-title">
            <h>Score games</h>
          </div>
          <div id="score-games-logo">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/ScoreGame1.png`}
              alt="Score game 1"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/ScoreGame2.png`}
              alt="Score game 2"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/ScoreGame3.png`}
              alt="Score game 3"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/ScoreGame4.png`}
              alt="Score game 4"
            ></img>
          </div>
        </div>
        <div id="dashboard-footer">
          <p>© 2023 Logic Games 4Fun</p>
        </div>
      </div>
    </>
  );
};
