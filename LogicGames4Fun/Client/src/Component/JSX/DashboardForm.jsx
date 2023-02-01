import React from "react";
import "../CSS/DashboardForm.css";
import { Navbar } from "../Navbar/Navbar";

export const DashboardForm = () => {
  return (
    <>
      <div id="dashboard-page-conent">
        <Navbar />
        <div id="dashboard-level-games">
          <div className="level-game-logos">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/SudokuLogo.png`}
              alt="Sudoku logo"
            ></img>
          </div>
          <div className="easy-levels">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/SudokuEasyLevels.png`}
              alt="Sudoku logo"
            ></img>
          </div>
          <div className="medium-levels">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/SudokuEasyLevels.png`}
              alt="Sudoku logo"
            ></img>
          </div>
          <div className="hard-levels">
            <img
              src={`${process.env.PUBLIC_URL}/GamesImages/SudokuEasyLevels.png`}
              alt="Sudoku logo"
            ></img>
          </div>
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
