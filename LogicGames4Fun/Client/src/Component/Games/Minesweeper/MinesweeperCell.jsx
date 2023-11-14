import React from "react";

const MinesweeperCell = ({ cell, onClick, onContextMenu }) => {
  let content = "";
  const cellStyle = {
    width: "30px",
    height: "30px",
    // border: "1px solid gray",
    fontSize: "1.6rem",
    margin: "0.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  if (cell.isRevealed) {
    cellStyle.backgroundColor = "#ddd";
    if (cell.isMine) {
      content = "💣";
    } else if (cell.neighborMineCount > 0) {
      content = cell.neighborMineCount;
    }
  } else if (cell.isFlagged) {
    content = "🚩";
  }

  return (
    <button
      className="square"
      style={cellStyle}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {content}
    </button>
  );
};

export default MinesweeperCell;
