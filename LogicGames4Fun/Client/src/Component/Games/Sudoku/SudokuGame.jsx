import React, { useEffect, useState } from "react";
import Sudoku from "./sudoku";
import checkSudoku from "./checkSudoku";
import { solveSudoku } from "./backtracking";
import { generateFields } from "./generateSudokuCells";
import SudokuModal from "./SudokuModal";
import ReactDOM from "react-dom";
import Badge from "react-bootstrap/Badge";
import { useTranslation } from "react-i18next";

export const SudokuGame = () => {
  const [t] = useTranslation(["translation", "sudoku"]);
  const level = localStorage.getItem("sudokuLvl") || 1;
  const [mistakes, setMistakes] = useState(0);
  const [win, setWin] = useState(false);
  const [time, setTime] = useState(0);
  const [sudokuArr, setSudokuArr] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (win) {
      setModalShow(true);
    }
  }, [win]);

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
      <div className="sudoku min-vh-100 w-100 d-flex justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="sudoku__board d-flex justify-content-center align-items-center mt-2">
              <div className="sudoku__grid w-100 h-md-100 text-center">
                {sudokuArr.length > 0 &&
                  generateFields(sudokuArr, setMistakes, checkSudoku, setWin)}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4 p-1">
              <Badge className="w-100 p-3" bg="">
              {t("sudoku.time")} {String(Math.trunc(time / 3600)).padStart(2, 0)}:
                {String(Math.trunc(time / 60)).padStart(2, 0)}:
                {String(time % 60).padStart(2, 0)}
              </Badge>
            </div>

            <div className="col-md-4 p-1">
              <Badge className="w-100 col-md-4 p-3" bg="">
              {t("sudoku.mistakes")} {mistakes}
              </Badge>
            </div>

            <div className="col-md-4 p-1">
              <Badge className="w-100 col-md-4 p-3" bg="">
              {t("sudoku.level")} {level}
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {ReactDOM.createPortal(
        <SudokuModal
          show={modalShow}
          resetArr={setSudokuArr}
          onHide={setModalShow}
          setTime={setTime}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
