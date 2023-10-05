import React from "react";
import styles from "./CrosswordGame.module.scss";
import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Box from "@mui/material/Box";

export const CrosswordGame = () => {
  return (
    <>
      <div className={styles["game-container"]}>
        <div className={styles["game-internal-container"]}>
          <div className={styles["crossword-actions"]}>
            <div>
              <Link to={`/Dashboard`} className={styles["back-link"]}>
                <HiArrowLongLeft /> Back to games
              </Link>
            </div>
          </div>
          <div className={styles["crossword-board-container"]}>
            <div className={styles["crossword-board"]}>
              <div className={styles["grid-cells"]}>Crossword board</div>
            </div>
          </div>
          <div className={styles["crossword-game-info"]}>
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
              Level: 123
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
