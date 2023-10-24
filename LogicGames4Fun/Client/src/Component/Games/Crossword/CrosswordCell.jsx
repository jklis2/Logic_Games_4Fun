import React from "react";

function CrosswordCell({ onInputChange,  data, word, checked, number, reset }) {
  const [inputValue, setInputValue] = React.useState("");
  const [isCorrect, setIsCorrect] = React.useState(null);

  const checkWord = () => {
    const expectedLetter = data;

    if (inputValue === expectedLetter) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  React.useEffect(() => {
    setInputValue("");
  }, [reset]);

  React.useEffect(() => {
    if (checked) {
      checkWord();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <div className="crossword__cell-container">
      {number && <span className="crossword__cell-number">{number}</span>}
      <input
        type="text"
        maxLength="1"
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value); onInputChange(e.target.value); }}
        className={`crossword__cell ${
          checked && isCorrect !== null
            ? isCorrect
              ? "crossword__cell-correct"
              : "crossword__cell-incorrect"
            : ""
        }`}
        id={word}
      />
    </div>
  );
}

export default CrosswordCell;
