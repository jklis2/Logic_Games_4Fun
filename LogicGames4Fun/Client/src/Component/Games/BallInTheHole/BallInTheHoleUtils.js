export function generateHoles(
    count,
    maxX,
    maxY,
    padding = 10,
    holeSize = 40,
    mathResult,
    difficulty
  ) {
    const holes = [];
    const numberRanges = {
      easy: { min: 0, max: 40 },
      medium: { min: -100, max: 10000 },
      hard: { min: -999000, max: 1000000 },
      impossible: { min: -99990000, max: 100000000 },
    };
  
    const generateRandomNumber = (difficulty, usedNumbers) => {
      const range = numberRanges[difficulty];
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      } while (usedNumbers.has(randomNumber));
      usedNumbers.add(randomNumber);
      return randomNumber;
    };
  
    const usedNumbers = new Set();
    if (mathResult !== null) {
      usedNumbers.add(mathResult);
    }
  
    for (let i = 0; i < count; i++) {
      let newHole;
      let isOverlapping;
      do {
        isOverlapping = false;
        newHole = {
          left: Math.random() * (maxX - holeSize),
          top: Math.random() * (maxY - holeSize),
          result: i === 0 && mathResult !== null ? mathResult : generateRandomNumber(difficulty, usedNumbers),
        };
  
        for (const hole of holes) {
          const dx = newHole.left - hole.left;
          const dy = newHole.top - hole.top;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < holeSize + padding) {
            isOverlapping = true;
            break;
          }
        }
      } while (isOverlapping);
      holes.push(newHole);
    }
    return holes;
  }
  
  export function generateHolesWithPadding(
    count,
    maxX,
    maxY,
    padding = 10,
    holeSize = 40
  ) {
    const holes = [];
    for (let i = 0; i < count; i++) {
      let newHole;
      let isOverlapping;
      do {
        isOverlapping = false;
        newHole = {
          left: Math.random() * (maxX - holeSize),
          top: Math.random() * (maxY - holeSize),
        };
  
        for (const hole of holes) {
          const dx = newHole.left - hole.left;
          const dy = newHole.top - hole.top;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < holeSize + padding) {
            isOverlapping = true;
            break;
          }
        }
      } while (isOverlapping);
      holes.push(newHole);
    }
    return holes;
  }
  
  export const sortAndLimitRecords = (records, newRecord) => {
    const newRecords = [...records, newRecord];
    newRecords.sort((a, b) => a - b);
    if (newRecords.length > 5) {
      newRecords.length = 5;
    }
    return newRecords;
  };
  