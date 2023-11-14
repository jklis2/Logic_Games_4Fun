import {
    placeMines,
    calculateNeighborMines,
  } from "./minesweepersHelpers";

export function initializeBoard(config) {
  const board = Array.from({ length: config.rows }, () =>
    Array.from({ length: config.cols }, () => ({
      isRevealed: false,
      isMine: false,
      isFlagged: false,
      neighborMineCount: 0,
    }))
  );

  placeMines(board, config.mines);
  calculateNeighborMines(board);

  return board;
}
