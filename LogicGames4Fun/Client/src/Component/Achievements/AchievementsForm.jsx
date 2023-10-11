import React from "react";
import styles from "./AchievementsForm.module.scss";
import { Navbar } from "../Navbar/Navbar";
import DashboardFooter from "../Dashboard/DashboardFooter";
import ProgressBarValue from "./ProgressBarValue";

export const AchievementsForm = () => {
  return (
    <>
      <Navbar />
      <h1 className="h1 text-center my-5">Achievements</h1>
      <div className="container">
        <div className="row justify-content-center">
          {/* Sudoku achievements */}
          <div className="col-md-4 achievement-card bg-light p-3 row">
            <div className="col-4 d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuNoviceAchievement.png`}
                alt="Sudoku Navoice"
                className="w-100"
              ></img>
            </div>
            <div className="col-8 d-flex justify-content-center flex-column">
              <p className="fs-3">Finish 25 easy levels of Sudoku</p>
              <ProgressBarValue />
            </div>
          </div>
          {/* end */}

          <div className="achievement-card bg-light p-3 col-md-4 row">
            <div className="col-4 d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuProficientAchievement.png`}
                alt="Sudoku Proficient"
                className="w-100"
              ></img>
            </div>
            <div className="col-8 d-flex justify-content-center flex-column">
              <p className="fs-3">Finish 25 medium levels of Sudoku</p>
              <ProgressBarValue />
            </div>
          </div>

          <div className="achievement-card mx-1 bg-light p-3 col-md-4 row">
            <div className="col-4 d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuMasterAchievement.png`}
                alt="Sudoku Master"
                className="w-100"
              ></img>
            </div>
            <div className="col-8 d-flex justify-content-center flex-column">
              <p className="fs-3">Finish 25 hard levels of Sudoku</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/SudokuImages/SudokuKingAchievement.png`}
                alt="Sudoku King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Sudoku</p>
              <ProgressBarValue />
            </div>
          </div>

          {/* Crossword achievements */}
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordNoviceAchievement.png`}
                alt="Crossword Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Crossword</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordProficientAchievement.png`}
                alt="Crossword Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Crossword</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordMasterAchievement.png`}
                alt="Crossword Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Crossword</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/CrosswordImages/CrosswordKingAchievement.png`}
                alt="Crossword King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Crossword</p>
              <ProgressBarValue />
            </div>
          </div>

          {/* Puzzle achievements */}
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleNoviceAchievement.png`}
                alt="Puzzle Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Puzzle</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleProficientAchievement.png`}
                alt="Puzzle Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Puzzle</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleMasterAchievement.png`}
                alt="Puzzle Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Puzzle</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/PuzzleImages/PuzzleKingAchievement.png`}
                alt="Puzzle King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Puzzle</p>
              <ProgressBarValue />
            </div>
          </div>

          {/* Quiz achievements */}
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizNoviceAchievement.png`}
                alt="Quiz Navoice"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 easy levels of Quiz</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizProficientAchievement.png`}
                alt="Quiz Proficient"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 medium levels of Quiz</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizMasterAchievement.png`}
                alt="Quiz Master"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish 25 hard levels of Quiz</p>
              <ProgressBarValue />
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles["achievements-image"]}>
              <img
                src={`${process.env.PUBLIC_URL}/AchievementImages/QuizImages/QuizKingAchievement.png`}
                alt="Quiz King"
              ></img>
            </div>
            <div className={styles["achievements-description"]}>
              <p>Finish all levels of Quiz</p>
              <ProgressBarValue />
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
