export function generateHoles(
    count,
    maxX,
    maxY,
    padding = 10,
    holeSize = 40,
    mathResult
) {
    const holes = [];
    const usedNumbers = new Set();
    const increment = 8; 
    const variance = 8; 

    usedNumbers.add(mathResult); 

    for (let i = 0; i < count; i++) {
        let newHole;
        let isOverlapping;
        do {
            isOverlapping = false;
            let result;
            if (i === 0) {
                result = mathResult; 
            } else {
                do {
                    const direction = Math.random() < 0.5 ? -1 : 1;
                    result = mathResult + direction * (Math.floor(Math.random() * increment) + Math.floor(Math.random() * variance) - variance / 2);
                } while (usedNumbers.has(result)); 
                usedNumbers.add(result); 
            }

            newHole = {
                left: Math.random() * (maxX - holeSize),
                top: Math.random() * (maxY - holeSize),
                result: result,
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
