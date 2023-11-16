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
  const variance = 0.30;
  const maxAttempts = 100;

  const generateVarianceNumber = (baseNumber, isGreater) => {
      return isGreater ? baseNumber * (1 + variance) : baseNumber * (1 - variance);
  };

  const generateUniqueVarianceNumber = (baseNumber, usedNumbers) => {
      let attempts = 0;
      let uniqueNumber;
      do {
          uniqueNumber = Math.round(generateVarianceNumber(baseNumber, Math.random() < 0.5));
          if (attempts > maxAttempts) {
              uniqueNumber = Math.round(baseNumber * (2 + Math.random()));
              break;
          }
          attempts++;
      } while (usedNumbers.has(uniqueNumber));
      usedNumbers.add(uniqueNumber);
      return uniqueNumber;
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
              result: i === 0 && mathResult !== null ? mathResult : generateUniqueVarianceNumber(mathResult, usedNumbers),
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
