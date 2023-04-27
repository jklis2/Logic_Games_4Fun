import React, { useEffect, useState } from "react";
import styles from "./SudokuGame.module.scss";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { tipsPop } from "./tipsPop";
import { howToPlayPop } from "./howToPlayPop";

class Sudoku {
  constructor(row, column, value, box) {
    this.column = column;
    this.row = row;
    this.value = value;
    this.box = box;
  }
}

const sudokuArr = [];
let uniquePairsArr = [];
let box;

const generteAnswers = () => {
  const uniquePairs = new Set();

  while (uniquePairs.size < 60) {
    const i = Math.floor(Math.random() * 9);
    const j = Math.floor(Math.random() * 9);
    const pair = [i, j];

    const pairString = JSON.stringify(pair);
    if (!uniquePairs.has(pairString)) {
      uniquePairs.add(pairString);
    }
  }
  const uniquePairsArray = Array.from(uniquePairs).map((pair) =>
    JSON.parse(pair)
  );
  uniquePairsArr = Array.from(uniquePairsArray);
};
generteAnswers();

const checkSudoku = function (column, row, value) {
  const sudokuObj = sudokuArr.find(
    (su) => su.column === column && su.row === row
  );
  const { box } = sudokuObj;

  const columnsClone = sudokuArr.filter((su) => su.column === column);
  const rowsClone = sudokuArr.filter((su) => su.row === row);
  const boxClone = sudokuArr.filter((su) => su.box === box);

  const existsRow = rowsClone.filter((row) => row.value === value);
  const existsColumn = columnsClone.filter((column) => column.value === value);
  const existsBox = boxClone.filter((box) => box.value === value);

  if (existsRow.length > 0 || existsColumn.length > 0 || existsBox.length > 0) {
    console.log("You cannot use this value");
    return false;
  }

  sudokuObj.value = value;
  return true;
};

const checkGeneratedValue = (row, col, value) => {
  const columnsClone = sudokuArr.filter((su) => su.column === col);
  const rowsClone = sudokuArr.filter((su) => su.row === row);
  const boxClone = sudokuArr.filter((su) => su.box === box);

  const existsRow = rowsClone.filter((row) => row.value === value);
  const existsColumn = columnsClone.filter((column) => column.value === value);
  const existsBox = boxClone.filter((box) => box.value === value);

  if (existsRow.length > 0 || existsColumn.length > 0 || existsBox.length > 0) {
    return false;
  }

  return true;
};

let cellValue = null;
for (let col = 0; col < 9; col++) {
  for (let row = 0; row < 9; row++) {
    box = Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1;
    const testValue = (Math.floor(Math.random() * 9) + 1).toString()

    //Fix it in the future
    JSON.stringify(uniquePairsArr).includes(JSON.stringify([col, row]))
      ? (cellValue = testValue)
      : (cellValue = null);

    sudokuArr.push(new Sudoku(col, row, cellValue, box));
  }
}

export const SudokuGame = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  const [isCorrect, setIsCorrect] = useState(true);

  const level = useSelector((state) => state.sudoku.level);

  const generateFields = () => {
    const cellsSet = [];
    let noOfCell = 1;

    for (let i = 0; i < 9; i++) {
      let cells = [];
      for (let j = 0; j < 9; j++) {
        const { value } = sudokuArr.find(
          (sud) => sud.column === i && sud.row === j
        );
        cells.push(
          <div
            key={noOfCell}
            className={styles.cell}
            style={{
              marginRight: j === 2 || j === 5 ? "10px" : "0px",
              marginBottom: i === 2 || i === 5 ? "10px" : "0px",
              background: isCorrect ? "" : "red",
            }}
          >
            <input
              type="number"
              defaultValue={value}
              pattern="[1-9]"
              onInput={(e) => {
                const inputValue = e.target.value;
                const pattern = /^[1-9]$/;
                if (!pattern.test(inputValue)) {
                  e.target.value = "";
                }
              }}
              onChange={(e) => {
                checkSudoku(i, j, e.target.value)
                  ? setIsCorrect(true)
                  : setIsCorrect(false);
              }}
            />
          </div>
        );
        noOfCell++;
      }
      cellsSet.push(cells);
    }
    return cellsSet;
  };

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
              <div className={styles["grid-cells"]}>{generateFields()}</div>
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
              Mistakes: 666
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
    </>
  );
};
