export const generateMemoryLevels = () => {
  let levelsWithDifficulty = [];
  let pairs = 0;
  for (let lvl = 1; lvl <= 100; lvl++) {
    lvl < 30 && lvl % 10 === 1 && (pairs += 2);
    lvl > 30 && lvl % 15 === 0 && (pairs += 2);

    levelsWithDifficulty.push({ lvl, pairs });
  }
  console.log(levelsWithDifficulty);
  return levelsWithDifficulty;
};
