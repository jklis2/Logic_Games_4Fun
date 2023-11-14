import React from "react";

function TicTacToeSquare({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default TicTacToeSquare;
