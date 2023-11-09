export function generateMaze(x, y) {
  const totalCells = x * y;
  const maze = [];
  const unvisited = [];
  for (let i = 0; i < y; i++) {
    maze[i] = [];
    unvisited[i] = [];
    for (let j = 0; j < x; j++) {
      maze[i][j] = [0, 0, 0, 0];
      unvisited[i][j] = true;
    }
  }

  let currentCell = [
    Math.floor(Math.random() * y),
    Math.floor(Math.random() * x),
  ];
  const path = [currentCell];
  unvisited[currentCell[0]][currentCell[1]] = false;
  let visited = 1;

  while (visited < totalCells) {
    const pot = [
      [currentCell[0] - 1, currentCell[1], 0, 2],
      [currentCell[0], currentCell[1] + 1, 1, 3],
      [currentCell[0] + 1, currentCell[1], 2, 0],
      [currentCell[0], currentCell[1] - 1, 3, 1],
    ];
    const neighbors = [];

    for (let l = 0; l < 4; l++) {
      if (
        pot[l][0] > -1 &&
        pot[l][0] < y &&
        pot[l][1] > -1 &&
        pot[l][1] < x &&
        unvisited[pot[l][0]][pot[l][1]]
      ) {
        neighbors.push(pot[l]);
      }
    }

    if (neighbors.length) {
      const next = neighbors[Math.floor(Math.random() * neighbors.length)];

      maze[currentCell[0]][currentCell[1]][next[2]] = 1;
      maze[next[0]][next[1]][next[3]] = 1;

      unvisited[next[0]][next[1]] = false;
      visited++;
      currentCell = [next[0], next[1]];
      path.push(currentCell);
    } else {
      currentCell = path.pop();
    }
  }
  return maze;
}

export function solve(
  maze,
  startX = 0,
  startY = 0,
  endX = maze.length - 1,
  endY = maze[0].length - 1
) {
  const visited = [];
  for (let x = 0; x < maze.length; x++) {
    visited[x] = [];
    for (let y = 0; y < maze[x].length; y++) {
      visited[x][y] = false;
    }
  }

  const solution = [];
  let currentX = startX;
  let currentY = startY;
  let options = [];

  while (currentX !== endX || currentY !== endY) {
    visited[currentX][currentY] = true;
    options = getOptions(currentX, currentY, maze, visited);

    if (options.length === 0) {
      const [newX, newY] = solution.pop();
      currentX = newX;
      currentY = newY;
    } else {
      solution.push([currentX, currentY]);
      const [newX, newY] = options[0];
      currentX = newX;
      currentY = newY;
    }
  }

  solution.push([currentX, currentY]);

  return solution;
}

function getOptions(x, y, maze, visited) {
  const options = [];
  const cell = maze[x][y];
  const rows = maze.length;
  const cols = maze[0].length;

  if (x + 1 < rows && !visited[x + 1][y] && cell[2] === 1) {
    options.push([x + 1, y]);
  }

  if (y + 1 < cols && !visited[x][y + 1] && cell[1] === 1) {
    options.push([x, y + 1]);
  }

  if (y - 1 >= 0 && !visited[x][y - 1] && cell[3] === 1) {
    options.push([x, y - 1]);
  }

  if (x - 1 >= 0 && !visited[x - 1][y] && cell[0] === 1) {
    options.push([x - 1, y]);
  }

  return options;
}
