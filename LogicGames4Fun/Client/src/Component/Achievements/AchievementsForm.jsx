import React from "react";
import "./AchievementsForm.css";
import { Navbar } from "../Navbar/Navbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgrssBarValue from "./ProgressBarValue";

export const AchievementsForm = () => {
  return (
    <>
      <div className="achievements-page-content">
        <Navbar />
        <div className="achievements-title">
          <h1>Achievements</h1>
        </div>
        <div className="user-achievements">

          {/* Sudoku achievements */}
          <div className="sudoku-novice-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuNoviceAchievement.png`}
                alt="Sudoku Navoice"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 easy levels of Sudoku</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="sudoku-proficient-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuProficientAchievement.png`}
                alt="Sudoku Proficient"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 medium levels of Sudoku</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="sudoku-master-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuMasterAchievement.png`}
                alt="Sudoku Master"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 hard levels of Sudoku</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="sudoku-king-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuKingAchievement.png`}
                alt="Sudoku King"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish all levels of Sudoku</p>
              <ProgrssBarValue/>
            </div>
          </div>

          {/* Crossword achievements */}
          <div className="crossword-novice-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordNoviceAchievement.png`}
                alt="Crossword Navoice"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 easy levels of Crossword</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="crossword-proficient-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordProficientAchievement.png`}
                alt="Crossword Proficient"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 medium levels of Crossword</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="crossword-master-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordMasterAchievement.png`}
                alt="Crossword Master"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 hard levels of Crossword</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="crossword-king-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordKingAchievement.png`}
                alt="Crossword King"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish all levels of Crossword</p>
              <ProgrssBarValue/>
            </div>
          </div>

          {/* Puzzle achievements */}
          <div className="puzzle-novice-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleNoviceAchievement.png`}
                alt="Puzzle Navoice"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 easy levels of Puzzle</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="puzzle-proficient-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleProficientAchievement.png`}
                alt="Puzzle Proficient"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 medium levels of Puzzle</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="puzzle-master-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleMasterAchievement.png`}
                alt="Puzzle Master"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 hard levels of Puzzle</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="puzzle-king-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleKingAchievement.png`}
                alt="Puzzle King"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish all levels of Puzzle</p>
              <ProgrssBarValue/>
            </div>
          </div>

          {/* Quiz achievements */}
          <div className="quiz-novice-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizNoviceAchievement.png`}
                alt="Quiz Navoice"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 easy levels of Quiz</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="quiz-proficient-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizProficientAchievement.png`}
                alt="Quiz Proficient"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 medium levels of Quiz</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="quiz-master-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizMasterAchievement.png`}
                alt="Quiz Master"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish 25 hard levels of Quiz</p>
              <ProgrssBarValue/>
            </div>
          </div>
          <div className="quiz-king-achievement">
            <div className="achievements-image">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizKingAchievement.png`}
                alt="Quiz King"
              ></img>
            </div>
            <div className="achievements-description">
              <p>Finish all levels of Quiz</p>
              <ProgrssBarValue/>
            </div>
          </div>
        </div>
        <DashboardFooter/>
      </div>
    </>
  );
};
