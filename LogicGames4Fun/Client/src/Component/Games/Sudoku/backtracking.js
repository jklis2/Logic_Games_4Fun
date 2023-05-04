export function solveSudoku(lvl) {
  const findNumbers = difficulty();
  const numbersToRemove = findNumbers.filter((num) => num.lvl === +lvl);
  
  const board = new Array(9);
  for (let i = 0; i < 9; i++) {
    board[i] = new Array(9).fill(0);
  }
  backtrack(board, 0, 0);

  for (let i = 0; i < numbersToRemove[0].numbers; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    board[row][col] = null;
  }

  return board;
}

export function difficulty() {
  const levelsNumbers = [Array.from({ length: 75 }, (_, i) => i + 1)];
  const levels = [];

  let numbers = 10;
  levelsNumbers[0].forEach((lvl) => {
    if (lvl === 6) numbers += 5;
    if (lvl === 16) numbers += 10;
    if (lvl === 26) numbers += 21;
    if (lvl === 46) numbers += 3;
    if (lvl === 61) numbers += 6;
    if (lvl === 68) numbers += 4;
    if (lvl === 73) numbers += 5;

    levels.push({
      lvl: lvl,
      numbers,
    });
  });

  return levels;
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
