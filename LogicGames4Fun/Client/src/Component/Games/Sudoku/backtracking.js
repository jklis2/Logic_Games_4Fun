export function solveSudoku() {
  const board = new Array(9);
  for (let i = 0; i < 9; i++) {
    board[i] = new Array(9).fill(0);
  }
  backtrack(board, 0, 0);
  
  for (let i = 0; i < 10; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    board[row][col] = null;
  }

  return board;
}

function backtrack(board, row, col) {
  if (col === 9) {
    row++;
    col = 0;
    if (row === 9) {
      return true;
    }
  }
  if (board[row][col] !== 0) {
    return backtrack(board, row, col + 1);
  }
  const candidates = getCandidates(board, row, col);
  for (const candidate of candidates) {
    board[row][col] = candidate;
    if (backtrack(board, row, col + 1)) {
      return true;
    }
  }
  board[row][col] = 0;
  return false;
}

function getCandidates(board, row, col) {
  const candidates = new Set(
    [1, 2, 3, 4, 5, 6, 7, 8, 9].sort((a, b) => 0.5 - Math.random())
  );

  for (let i = 0; i < 9; i++) {
    candidates.delete(board[row][i]);
    candidates.delete(board[i][col]);
  }

  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;
  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      candidates.delete(board[i][j]);
    }
  }
  return Array.from(candidates);
}