export const generateFields = (sudokuArr, setMistakes, checkSudoku, setWin) => {
  const cellChangeHandler = (e, col, row) => {
    const check =
      e.target.value !== "" &&
      checkSudoku(sudokuArr, col, row, +e.target.value);
    const { exists, error } = check;

    if (sudokuArr.every((arr) => arr.value !== null) && !error) {
      setWin((isWon) => !isWon);
    }

    if (exists) {
      const { existsRow, existsColumn, existsBox } = check;
      document
        .querySelector(`.col${col}.row${row}`)
        ?.classList.add(`text-danger`);

      document
        .querySelector(
          `.col${existsRow?.[0]?.column}.row${existsRow?.[0]?.row}`
        )
        ?.classList.add(`text-danger`);
      document
        .querySelector(
          `.col${existsColumn?.[0]?.column}.row${existsColumn?.[0]?.row}`
        )
        ?.classList.add(`text-danger`);
      document
        .querySelector(
          `.col${existsBox?.[0]?.column}.row${existsBox?.[0]?.row}`
        )
        ?.classList.add(`text-danger`);
      setMistakes((mistakes) => (mistakes += 1));
    } else {
      // console.log(sudokuArr);
      document
        .querySelector(`.col${col}.row${row}`)
        .classList.remove(`text-danger`);
      document
        .querySelectorAll(`.col${col}`)
        ?.forEach((colClass) => colClass.classList.remove(`text-danger`));
      document
        .querySelectorAll(`.row${row}`)
        ?.forEach((rowClass) => rowClass.classList.remove(`text-danger`));
      document
        .querySelectorAll(
          `.box${Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1}`
        )
        ?.forEach((boxClass) => boxClass.classList.remove(`text-danger`));
    }
  };

  const cellFocusHandler = (col, row) => {
    const previous = document.querySelector(".sudoku__grid--focused");
    previous && previous.classList.remove("sudoku__grid--focused");
    document
      .querySelector(`.col${col}.row${row}`)
      .classList.add(`sudoku__grid--focused`);

    const helpRows = document.querySelectorAll(`.row${row}`);
    const helpCols = document.querySelectorAll(`.col${col}`);
    const helpBox = document.querySelectorAll(
      `.box${Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1}`
    );

    helpRows.forEach((row) => {
      row.classList.add(`sudoku__grid--helper`);
    });
    helpCols.forEach((col) => {
      col.classList.add(`sudoku__grid--helper`);
    });
    helpBox.forEach((box) => {
      box.classList.add(`sudoku__grid--helper`);
    });
  };

  const cellLeaveHandler = (col, row) => {
    const rows = document.querySelectorAll(`.row${row}`);
    const cols = document.querySelectorAll(`.col${col}`);
    const helpBox = document.querySelectorAll(
      `.box${Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1}`
    );

    rows.forEach((row) => {
      row.classList.remove(`sudoku__grid--helper`);
    });
    cols.forEach((col) => {
      col.classList.remove(`sudoku__grid--helper`);
    });
    helpBox.forEach((box) => {
      box.classList.remove(`sudoku__grid--helper`);
    });
  };

  const cellsSet = [];
  let noOfCell = 1;

  for (let col = 0; col < 9; col++) {
    let cells = [];
    for (let row = 0; row < 9; row++) {
      const { value } = sudokuArr.find(
        (sud) => sud.column === col && sud.row === row
      );

      cells.push(
        <div
          key={noOfCell}
          className={`sudoku__grid__cell d-flex align-items-center col${col} row${row} box${
            Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1
          }`}
          style={{
            marginRight: row === 2 || row === 5 ? "1.5rem" : "0px",
            marginBottom: col === 2 || col === 5 ? "2rem" : "0px",
          }}
        >
          <input
            type="number"
            defaultValue={value}
            pattern="[1-9]"
            onInput={(e) => {
              const inputValue = e.target.value;
              const pattern = /^[1-9]$/;
              if (!pattern.test(inputValue)) {
                e.target.value = "";
              }
            }}
            onChange={(e) => cellChangeHandler(e, col, row)}
            onFocus={() => cellFocusHandler(col, row)}
            onBlur={() => cellLeaveHandler(col, row)}
          />
        </div>
      );
      noOfCell++;
    }
    cellsSet.push(cells);
  }
  return cellsSet;
};
