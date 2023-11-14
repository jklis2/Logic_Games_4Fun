export const easyAI = (board) => {
  let availableMoves = [];
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) availableMoves.push(i);
  }
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

export const mediumAI = (board) => {
  for (let i = 0; i < board.length; i++) {
    let copyBoard = [...board];
    if (!copyBoard[i]) {
      copyBoard[i] = "O";
      if (checkWin(copyBoard, "O")) {
        return i;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    let copyBoard = [...board];
    if (!copyBoard[i]) {
      copyBoard[i] = "X";
      if (checkWin(copyBoard, "X")) {
        return i;
      }
    }
  }

  return easyAI(board);
};

export const hardAI = (board) => {
  return minimax(board, "O").index;
};

const checkWin = (board, player) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    if (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) {
      return true;
    }
  }
  return false;
};

const minimax = (board, player) => {
  const emptyIndices = board.filter((s, i) => board[i] === null);

  if (checkWin(board, "X")) {
    return { score: -10 };
  } else if (checkWin(board, "O")) {
    return { score: 10 };
  } else if (emptyIndices.length === 0) {
    return { score: 0 };
  }

  let moves = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      let move = {};
      move.index = i;
      board[i] = player;

      if (player === "O") {
        const g = minimax(board, "X");
        move.score = g.score;
      } else {
        const g = minimax(board, "O");
        move.score = g.score;
      }

      board[i] = null;
      moves.push(move);
    }
  }

  let bestMove;
  if (player === "O") {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
};
