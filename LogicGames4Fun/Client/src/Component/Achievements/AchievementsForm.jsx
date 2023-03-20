import React from "react";
import styles from "./AchievementsForm.module.css";
import { Navbar } from "../Navbar/Navbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";

export const AchievementsForm = () => {
  return (
    <>
      <div className={styles["achievements-page-content"]}>
        <Navbar />
        <div className={styles["achievements-title"]}>
          <h1>Achievements</h1>
        </div>
        <div className={styles["user-achievements"]}>

          {/* Sudoku achievements */}
          <div className={styles["sudoku-novice-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuNoviceAchievement.png`}
                alt="Sudoku Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Sudoku</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["sudoku-proficient-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuProficientAchievement.png`}
                alt="Sudoku Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Sudoku</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["sudoku-master-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuMasterAchievement.png`}
                alt="Sudoku Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Sudoku</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["sudoku-king-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuKingAchievement.png`}
                alt="Sudoku King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Sudoku</p>
              <ProgressBarValue/>
            </div>
          </div>

          {/* Crossword achievements */}
          <div className={styles["crossword-novice-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordNoviceAchievement.png`}
                alt="Crossword Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Crossword</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["crossword-proficient-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordProficientAchievement.png`}
                alt="Crossword Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Crossword</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["crossword-master-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordMasterAchievement.png`}
                alt="Crossword Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Crossword</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["crossword-king-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordKingAchievement.png`}
                alt="Crossword King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Crossword</p>
              <ProgressBarValue/>
            </div>
          </div>

          {/* Puzzle achievements */}
          <div className={styles["puzzle-novice-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleNoviceAchievement.png`}
                alt="Puzzle Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Puzzle</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["puzzle-proficient-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleProficientAchievement.png`}
                alt="Puzzle Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Puzzle</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["puzzle-master-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleMasterAchievement.png`}
                alt="Puzzle Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Puzzle</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["puzzle-king-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleKingAchievement.png`}
                alt="Puzzle King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Puzzle</p>
              <ProgressBarValue/>
            </div>
          </div>

          {/* Quiz achievements */}
          <div className={styles["quiz-novice-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizNoviceAchievement.png`}
                alt="Quiz Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Quiz</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["quiz-proficient-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizProficientAchievement.png`}
                alt="Quiz Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Quiz</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["quiz-master-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizMasterAchievement.png`}
                alt="Quiz Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Quiz</p>
              <ProgressBarValue/>
            </div>
          </div>
          <div className={styles["quiz-king-achievement"]}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizKingAchievement.png`}
                alt="Quiz King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Quiz</p>
              <ProgressBarValue/>
            </div>
          </div>
        </div>
        <DashboardFooter/>
      </div>
    </>
  );
};
