import React, { useState } from "react";
import styles from "./SudokuGame.module.scss";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const howToPlayPop = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Sudoku Instruction</Popover.Header>
    <Popover.Body>
      Start with a blank 9x9 grid that has some of the cells already filled with
      digits. Identify the row, column, and box where the given digit is already
      present. Fill the empty cells in the same row, column, and box with the
      remaining digits from 1 to 9. Repeat the above step for each given digit
      until all the empty cells are filled. Ensure that each row, column, and
      box contains digits from 1 to 9 only once. The game is won when all the
      cells in the grid are filled with digits that satisfy the above
      conditions.
    </Popover.Body>
  </Popover>
);

const tipsPop = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Sudoku Tips</Popover.Header>
    <Popover.Body>
      <ol>
        <li>
          Start by filling the easiest cells, i.e., the ones with the fewest
          possible options. This will help you make progress quickly.
        </li>
        <li>
          Use logic and deduction to eliminate possible options for each cell.
          This will help you identify the correct digit for each cell.
        </li>
        <li>
          Double-check your work to ensure that you have not made any mistakes.
        </li>
        <li>Practice regularly to improve your skills and speed.</li>
      </ol>

      <strong>Enjoy playing Sudoku!</strong>
    </Popover.Body>
  </Popover>
);

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
console.log(sudokuArr);

const checkSudoku = function (column, row, value) {
  //Szuka elementu
  const sudokuObj = sudokuArr.find(
    (su) => su.column === column && su.row === row
  );
  console.log(sudokuObj)
  const { box } = sudokuObj;

  // Nie dziala
  const columnsClone = sudokuArr.filter((su) => su.column === column);
  const rowsClone = sudokuArr.filter((su) => su.row === row);
  const boxClone = sudokuArr.filter((su) => su.box === box);

  const existsRow = rowsClone.filter((row) => row.value === value);
  const existsColumn = columnsClone.filter(
    (column) => column.value === value
  );
  const existsBox = boxClone.filter((box) => box.value === value);

  if (
    existsRow.length > 0 ||
    existsColumn.length > 0 ||
    existsBox.length > 0
  ) {
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
  const existsColumn = columnsClone.filter(
    (column) => column.value === value
  );
  const existsBox = boxClone.filter((box) => box.value === value);

  if (
    existsRow.length > 0 ||
    existsColumn.length > 0 ||
    existsBox.length > 0
  ) {
    console.log("You cannot use this value");
    return false;
  }

  return true;
}

let cellValue = null;
for (let col = 0; col < 9; col++) {
  for (let row = 0; row < 9; row++) {
    box = Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1;

    //Fix it in the future

    JSON.stringify(uniquePairsArr).includes(JSON.stringify([col, row]))
      ? (cellValue = Math.floor(Math.random() * 9) + 1)
      : (cellValue = null);

    sudokuArr.push(new Sudoku(col, row, cellValue, box));
  }
}

export const SudokuGame = () => {
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
              Time: 00:00:00
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
          <div className={styles["sudoku-keyboard-container"]}>
            <div className={styles["sudoku-keyboard"]}>
              <div className={styles.number}>1</div>
              <div className={styles.number}>2</div>
              <div className={styles.number}>3</div>
              <div className={styles.number}>4</div>
              <div className={styles.number}>5</div>
              <div className={styles.number}>6</div>
              <div className={styles.number}>7</div>
              <div className={styles.number}>8</div>
              <div className={styles.number}>9</div>
              <div className={styles.delete}>X</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
