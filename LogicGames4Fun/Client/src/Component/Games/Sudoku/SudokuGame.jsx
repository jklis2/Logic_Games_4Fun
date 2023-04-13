import React from "react";
import styles from "./SudokuGame.module.scss";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Box from "@mui/material/Box";

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

export const SudokuGame = () => {
  const generateFields = () => {
    const cellsSet = [];
    for (let i = 0; i < 9; i++) {
      let cells = [];
      for (let j = 0; j < 9; j++) {
        cells.push(
          <div key={j} className={styles.cell}>
            {j}
          </div>
        );
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
              Level: 12
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
