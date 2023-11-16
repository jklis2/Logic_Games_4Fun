import React, { useEffect, useState } from "react";
import Sudoku from "./sudoku";
import checkSudoku from "./checkSudoku";
import styles from "./SudokuGame.module.scss";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { solveSudoku } from "./backtracking";
import { generateFields } from "./generateSudokuCells";
import SudokuModal from "./SudokuModal";
import ReactDOM from "react-dom";

export const SudokuGame = () => {
  const level = localStorage.getItem("sudokuLvl") || 1;
  const [mistakes, setMistakes] = useState(0);
  const [time, setTime] = useState(0);
  const [sudokuArr, setSudokuArr] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
  // eslint-disable-next-line
  const fields =  sudokuArr.length > 0 && generateFields(sudokuArr, setMistakes, styles, checkSudoku);
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="container mt-5 ">
          <div className="mx-5 my-2 row">
            <div className="col-md-6">
              <Link to={`/Dashboard`} className="fs-3">
                <HiArrowLongLeft /> Back to games
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className={styles["sudouku-board"]}>
            {/* <div className="d-flex justify-content-center align-items-center mt-3"> */}
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
