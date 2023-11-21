import React from "react";

function Tile2048({ value, x, y, merged, oldX, oldY, newTile }) {
  const positionStyle = {
    transform: `translate(${y * 110}px, ${x * 110}px)`,
};

  const previousPositionStyle = {
    transform: `translate(${oldY * 70}px, ${oldX * 70}px)`,
  };

  return (
    <div
      className={`tile tile-${value} ${merged ? "merged" : ""} ${
        newTile ? "new" : ""
      }`}
      style={positionStyle}
    >
      <div className="inner-tile" style={previousPositionStyle}>
        {value !== 0 ? value : ""}
      </div>
    </div>
  );
}

export default Tile2048;
