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
