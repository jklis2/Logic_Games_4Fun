import React from "react";

function TicTacToeSquare({ value, onClick }) {
  return (
    <button className="TicTacToeSquare" onClick={onClick}>
      {value}
    </button>
  );
}

export default TicTacToeSquare;
