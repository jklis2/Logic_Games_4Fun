export const generateMemoryLevels = () => {
  let levelsWithDifficulty = [];
  let pairs = 2;
  for (let lvl = 1; lvl <= 75; lvl++) {
    lvl % 4 === 0 ? lvl > 50 ? (pairs += 1) : (pairs += 2) : <></>;
    levelsWithDifficulty.push({ lvl, pairs });
  }
  return levelsWithDifficulty;
};
