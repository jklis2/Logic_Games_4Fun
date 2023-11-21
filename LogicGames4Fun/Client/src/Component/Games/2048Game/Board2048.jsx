import React from "react";
import Tile2048 from "./Tile2048";

function Board2048({ tiles, level }) {
  return (
    <>
    <div className={`board board__${level}`}>
      {tiles.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
          <Tile2048
            key={`tile-${rowIndex}-${colIndex}`}
            value={tile.value}
            x={rowIndex}
            y={colIndex}
            merged={tile.merged}
          />
        ))
      )}
    </div>
    </>
  );
}

export default Board2048;
