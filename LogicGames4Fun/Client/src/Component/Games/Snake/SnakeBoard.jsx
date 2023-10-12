import React from "react";

function SnakeBoard({ snake, foods, cellSize, numCols, numRows }) {
  const lightColor = "#aad751";
  const darkColor = "#a2d149";

  const renderBackground = () => {
    const cells = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const isEven = (row + col) % 2 === 0;
        cells.push(
          <div
            key={`${row}-${col}`}
            style={{
              position: "absolute",
              top: row * cellSize,
              left: col * cellSize,
              width: cellSize,
              height: cellSize,
              backgroundColor: isEven ? lightColor : darkColor,
            }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div
      style={{
        width: numCols * cellSize,
        height: numRows * cellSize,
        border: "1px solid black",
        position: "relative",
        fontSize: cellSize,
      }}
    >
      {renderBackground()}
      {snake.map((s, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: s.row * cellSize,
            left: s.col * cellSize,
            width: cellSize,
            height: cellSize,
            background:
              "linear-gradient(285deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
            backgroundBlendMode: "screen",
            borderRadius: "50%",
            transition: "top 0.1s linear, left 0.1s linear",
          }}
        />
      ))}
      {foods.map((food, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            top: food.row * cellSize,
            left: food.col * cellSize,
            width: cellSize,
            height: cellSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7em",
          }}
        >
          🍎
        </div>
      ))}
    </div>
  );
}

export default SnakeBoard;
