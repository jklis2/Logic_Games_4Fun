import React from "react";

const MinesweeperCell = ({ cell, onClick, onContextMenu }) => {
  let content = "";
  const cellStyle = {
    width: "30px",
    height: "30px",
    fontSize: "1.6rem",
    margin: "0.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const getMineCountClass = (count) => {
    switch (count) {
      case 1:
        return "mine-count-1";
      case 2:
        return "mine-count-2";
      case 3:
        return "mine-count-3";
      case 4:
        return "mine-count-4";
      case 5:
        return "mine-count-5";
      case 6:
        return "mine-count-6";
      case 7:
        return "mine-count-7";
      case 8:
        return "mine-count-8";
      default:
        return "";
    }
  };

  let cellClass = "square";
  if (cell.isRevealed) {
    cellStyle.backgroundColor = "#ddd";
    if (cell.isMine) {
      content = "💣";
    } else if (cell.neighborMineCount > 0) {
      content = cell.neighborMineCount;
      cellClass += ` ${getMineCountClass(cell.neighborMineCount)}`;
    }
  } else if (cell.isFlagged) {
    content = "🚩";
  }

  return (
    <button
      className={cellClass}
      style={cellStyle}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {content}
    </button>
  );
};

export default MinesweeperCell;
