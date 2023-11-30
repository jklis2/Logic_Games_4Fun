import React, { useState, useEffect } from "react";
import CrosswordCell from "./CrosswordCell";
import CrosswordClue from "./CrosswordClue";
import crosswordDictionary from "./crosswordDictionary";
import { useTranslation } from "react-i18next";

const numberOfWords = {
  easy: 5,
  medium: 8,
  hard: 12,
  impossible: 16,
};

function CrosswordBoard({ difficulty }) {
  const [t] = useTranslation(["translation", "crossword"]);
  const [showAlert, setShowAlert] = useState(false);
  const [allWords] = useState(crosswordDictionary.map((entry) => entry.word));
  const [selectedWords, setSelectedWords] = useState([]);
  const [sampleBoard, setSampleBoard] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [filledCells, setFilledCells] = useState({});
  const gridSize = selectedWords.reduce(
    (max, word) => Math.max(max, word.length),
    0
  );

  useEffect(() => {
    const filteredWords = crosswordDictionary
      .filter((entry) => entry.difficulty === difficulty)
      .map((entry) => entry.word);
    const shuffledWords = [...filteredWords].sort(() => 0.5 - Math.random());

    const selected = shuffledWords
      .slice(0, numberOfWords[difficulty])
      .map((word) => crosswordDictionary.find((entry) => entry.word === word));
    setSelectedWords(selected);

    const board = Array.from({ length: selected.length }).map((_, rowIndex) =>
      Array.from({ length: 25 })
        .map(
          (
            _,
            cellIndex //If the word is larger than 10, we change the value
          ) =>
            selected[rowIndex] && cellIndex < selected[rowIndex].word.length
              ? selected[rowIndex].word.charAt(cellIndex)
              : null
        )
        .filter(Boolean)
    );

    setSampleBoard(board);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allWords]);

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);

  const resetGame = () => {
    const filteredWords = crosswordDictionary
      .filter((entry) => entry.difficulty === difficulty)
      .map((entry) => entry.word);
    const shuffledWords = [...filteredWords].sort(() => 0.5 - Math.random());

    const selected = shuffledWords
      .slice(0, numberOfWords[difficulty])
      .map((word) => crosswordDictionary.find((entry) => entry.word === word));
    setSelectedWords(selected);

    const board = Array.from({ length: selected.length }).map((_, rowIndex) =>
      Array.from({ length: 25 })
        .map((_, cellIndex) =>
          selected[rowIndex] && cellIndex < selected[rowIndex].word.length
            ? selected[rowIndex].word.charAt(cellIndex)
            : null
        )
        .filter(Boolean)
    );

    setSampleBoard(board);

    setIsChecked(false);
    setResetTrigger((prev) => !prev);
  };

  const checkAnswers = () => {
    if (Object.keys(filledCells).length === sampleBoard.flat().length) {
      setIsChecked(true);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="row">
      <div className="d-flex flex-column mt-1 justify-content-center col-md-8">
        {sampleBoard.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((cellData, cellIndex) => (
              <CrosswordCell
                key={cellIndex}
                data={cellData}
                expectedLetter={cellData}
                checked={isChecked}
                number={cellIndex === 0 ? rowIndex + 1 : null}
                reset={resetTrigger}
                row={rowIndex}
                column={cellIndex}
                gridSize={gridSize}
                onInputChange={(value) => {
                  if (value) {
                    setFilledCells((prev) => ({
                      ...prev,
                      [`${rowIndex}-${cellIndex}`]: true,
                    }));
                  } else {
                    setFilledCells((prev) => {
                      const updated = { ...prev };
                      delete updated[`${rowIndex}-${cellIndex}`];
                      return updated;
                    });
                  }
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="col-md-4 ">
        <h3>{t("crossword.cluesTitle")}</h3>
        {selectedWords.map((entry, index) => (
          <CrosswordClue key={index} data={entry} number={index + 1} />
        ))}
        <div className="d-flex mt-3">
          <button className="button-light p-3 fs-4" onClick={checkAnswers}>
            {t("crossword.checkButton")}
          </button>
          <button className="button-light p-3 fs-4 ms-1" onClick={resetGame}>
            {t("crossword.resetButton")}
          </button>
        </div>
      </div>
      {showAlert && (
        <div
          className="alert alert-warning alert-dismissible fade show fixed-top w-50 d-flex justify-content-between"
          role="alert"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "2rem",
          }}
        >
          {t("crossword.pleaseFillCellsMessage")}
          <button
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}
    </div>
  );
}

export default CrosswordBoard;
