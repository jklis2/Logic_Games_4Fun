export const placeMines = (board, mineCount) => {
  const rows = board.length;
  const cols = board[0].length;
  const totalCells = rows * cols;
  const minePositions = new Set();

  if (mineCount >= totalCells) {
    throw new Error("Number of mines is greater than or equal to total cells!");
  }

  while (minePositions.size < mineCount) {
    const position = Math.floor(Math.random() * totalCells);
    minePositions.add(position);
  }

  minePositions.forEach((position) => {
    const row = Math.floor(position / cols);
    const col = position % cols;
    board[row][col].isMine = true;
  });

  return board;
};

export const calculateNeighborMines = (board) => {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col].isMine) continue;
      let mineCount = 0;
      for (const dir of directions) {
        const newRow = row + dir[0];
        const newCol = col + dir[1];
        if (
          newRow >= 0 &&
          newRow < board.length &&
          newCol >= 0 &&
          newCol < board[0].length &&
          board[newRow][newCol].isMine
        ) {
          mineCount++;
        }
      }
      board[row][col].neighborMineCount = mineCount;
    }
  }
  return board;
};

export const revealCell = (board, row, col) => {
  if (board[row][col].isRevealed || board[row][col].isFlagged) return board;

  const newBoard = board.map((r) => [...r]);
  newBoard[row][col].isRevealed = true;

  if (
    newBoard[row][col].neighborMineCount === 0 &&
    !newBoard[row][col].isMine
  ) {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    for (const dir of directions) {
      const newRow = row + dir[0];
      const newCol = col + dir[1];

      if (
        newRow >= 0 &&
        newRow < board.length &&
        newCol >= 0 &&
        newCol < board[0].length &&
        !newBoard[newRow][newCol].isRevealed
      ) {
        revealCell(newBoard, newRow, newCol);
      }
    }
  }

  return newBoard;
};

export const toggleFlag = (board, row, col) => {
  const newBoard = board.map((r) => [...r]);
  newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
  return newBoard;
};

export const checkGameOver = (board) => {
  for (const row of board) {
    for (const cell of row) {
      if (cell.isRevealed && cell.isMine) return "lost";
      if (!cell.isRevealed && !cell.isMine) return "ongoing";
    }
  }
  return "won";
};

export const revealAllMines = (board) => {
  const newBoard = board.map((row) =>
    row.map((cell) => {
      if (cell.isMine) {
        return {
          ...cell,
          isRevealed: true,
        };
      }
      return cell;
    })
  );
  return newBoard;
};
