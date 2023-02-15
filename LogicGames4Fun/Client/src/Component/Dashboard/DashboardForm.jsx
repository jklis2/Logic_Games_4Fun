import React from "react";
import "./DashboardForm.css";
import { Navbar } from "../Navbar/Navbar";
import { Fab } from "@mui/material";
import DashboardFooter from "./DashboardFooter";

export const DashboardForm = () => {

  const generateLevels = function (minLevel, maxLevel) {
    const levels = [];
    for (let lvl = minLevel; lvl < maxLevel; lvl++) {
      levels.push(
        <Fab
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
