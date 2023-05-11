import React, { useEffect, useState } from "react";
import Sudoku from "./sudoku";
import checkSudoku from "./checkSudoku";
import styles from "./SudokuGame.module.scss";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { tipsPop } from "./tipsPop";
import { howToPlayPop } from "./howToPlayPop";
import { solveSudoku } from "./backtracking";
import { generateFields } from "./generateSudokuCells";
import SudokuModal from "./SudokuModal";
import ReactDOM from "react-dom";

export const SudokuGame = () => {
  const level = localStorage.getItem("sudokuLvl");
  const [mistakes, setMistakes] = useState(0);
  const [time, setTime] = useState(0);
  const [sudokuArr, setSudokuArr] = useState([]);
  const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    const solvedArray = solveSudoku(level);
    const newSudokuArr = [];

    for (let col = 0; col < 9; col++) {
      for (let row = 0; row < 9; row++) {
        let box = Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1;
        newSudokuArr.push(new Sudoku(col, row, solvedArray[col][row], box));
      }
    }
    setSudokuArr(newSudokuArr);
  }, [level]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className={styles["game-container"]}>
        <div className={styles["game-internal-container"]}>
          <div className={styles["sudoku-actions"]}>
            <div>
              <Link to={`/Dashboard`} className={styles["back-link"]}>
                <HiArrowLongLeft /> Back to games
              </Link>
            </div>
            <div>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={howToPlayPop}
              >
                <Button>How to play?</Button>
              </OverlayTrigger>
            </div>
            <div>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={tipsPop}
              >
                <Button>Tips</Button>
              </OverlayTrigger>
            </div>
          </div>
          <div className={styles["sudouku-board-container"]}>
            <div className={styles["sudouku-board"]}>
              <div className={styles["grid-cells"]}>
                {sudokuArr.length > 0 &&
                  generateFields(sudokuArr, setMistakes, styles, checkSudoku)}
              </div>
            </div>
          </div>
          <div className={styles["sudoku-game-info"]}>
            <Box
              sx={{
                backgroundColor: "rgba(29, 125, 189, 0.753)",
                color: "white",
                borderRadius: "7px",
                padding: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Time: {String(Math.trunc(time / 3600)).padStart(2, 0)}:
              {String(Math.trunc(time / 60)).padStart(2, 0)}:
              {String(time % 60).padStart(2, 0)}
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(29, 125, 189, 0.753)",
                color: "white",
                borderRadius: "7px",
                padding: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Mistakes: {mistakes}
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(29, 125, 189, 0.753)",
                color: "white",
                borderRadius: "7px",
                padding: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Level: {level}
            </Box>
          </div>
        </div>
      </div>

      {ReactDOM.createPortal(
        <SudokuModal
          show={modalShow}
          setSudokuArr={setSudokuArr} 
          onHide={() => setModalShow(false)}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
