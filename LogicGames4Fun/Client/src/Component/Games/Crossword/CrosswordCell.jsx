import React, { useRef, useEffect, useState } from "react";

function CrosswordCell({
  onInputChange,
  data,
  word,
  checked,
  number,
  reset,
  row,
  column,
  gridSize,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRef = useRef(null);

  const checkWord = () => {
    if (inputValue === data) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    setInputValue("");
  }, [reset]);

  useEffect(() => {
    if (checked) {
      checkWord();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);

    if (newValue !== "") {
      let nextRow = row;
      let nextColumn = column + 1;

      if (nextColumn >= gridSize) {
        nextRow++;
        nextColumn = 0;
      }

      const nextCell = document.getElementById(`cell-${nextRow}-${nextColumn}`);
      if (nextCell) {
        nextCell.focus();
      }
    }
  };

  return (
    <div className="crossword__cell-container">
      {number && <span className="crossword__cell-number">{number}</span>}
      <input
        ref={inputRef}
        type="text"
        maxLength="1"
        value={inputValue}
        onChange={handleInputChange}
        className={`crossword__cell square ${
          checked && isCorrect !== null
            ? isCorrect
              ? "crossword__cell-correct"
              : "crossword__cell-incorrect"
            : ""
        }`}
        id={`cell-${row}-${column}`}
      />
    </div>
  );
}

export default CrosswordCell;
