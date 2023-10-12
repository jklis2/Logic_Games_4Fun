import React from "react";
import MinesweeperCell from "./MinesweeperCell";

const MinesweeperBoard = ({ board, onCellClick, onCellRightClick }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${board[0].length}, 32px)`,
        gap: "2px",
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <MinesweeperCell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            onContextMenu={(e) => {
              e.preventDefault();
              onCellRightClick(rowIndex, colIndex);
            }}
          />
        ))
      )}
    </div>
  );
};

export default MinesweeperBoard;
