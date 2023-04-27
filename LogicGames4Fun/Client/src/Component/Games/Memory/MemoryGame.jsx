import React from "react";
import styles from "./MemoryGame.module.scss";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Box from "@mui/material/Box";

const howToPlayPop = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Memory Instruction</Popover.Header>
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
    <Popover.Header as="h3">Memory Tips</Popover.Header>
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

      <strong>Enjoy playing Memory!</strong>
    </Popover.Body>
  </Popover>
);

class Memory {
  constructor(cardNumber, imgPath){
    this.cardNumber = cardNumber;
    this.imgPath = imgPath;
  }
}

export const MemoryGame = () => {
  return (
    <>
      <div className={styles["game-container"]}>
        <div className={styles["game-internal-container"]}>
          <div className={styles["memory-actions"]}>
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

          <div className={styles["memory-board-container"]}>
            <div className={styles["memory-board"]}>
              <div className={styles["grid-cells"]}>Memory board</div>
            </div>
          </div>
          <div className={styles["memory-game-info"]}>
            <Box
              sx={{
                backgroundColor: "rgba(29, 125, 189, 0.753)",
                color: "white",
                borderRadius: "7px",
                padding: "0.5rem",
                fontWeight: "bold",
                width: "200px"
              }}
            >
              Level: 123
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
