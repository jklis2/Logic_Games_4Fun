export const generateMemoryLevels = () => {
  const levelRules = [
    { start: 1, end: 12, pairs: 2, cols: 2, rows: 4 },
    { start: 13, end: 24, pairs: 3, cols: 3, rows: 2 },
    { start: 25, end: 36, pairs: 6, cols: 3, rows: 4 },
    { start: 37, end: 48, pairs: 8, cols: 4, rows: 4 },
    { start: 48, end: 59, pairs: 10, cols: 4, rows: 5 },
    { start: 60, end: 72, pairs: 12, cols: 4, rows: 6 },
    { start: 73, end: 85, pairs: 14, cols: 4, rows: 7 },
  ];

  let levelsWithDifficulty = [];

  for (let lvl = 1; lvl <= 100; lvl++) {
    const rule = levelRules.find((r) => lvl >= r.start && lvl <= r.end) || {};
    const { pairs, cols, rows } = rule;

    levelsWithDifficulty.push({ lvl, pairs, cols, rows });
  }

  return levelsWithDifficulty;
};
