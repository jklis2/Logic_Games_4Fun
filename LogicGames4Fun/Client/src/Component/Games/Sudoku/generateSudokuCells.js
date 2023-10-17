export const generateFields = (
  sudokuArr,
  setMistakes,
  styles,
  checkSudoku
) => {
  const cellChangeHandler = (e, col, row) => {
    const check =
      e.target.value !== "" && checkSudoku(sudokuArr, col, row, +e.target.value);
    const { exists } = check;

    if (exists) {
      const { existsRow, existsColumn, existsBox } = check;
      document
        .querySelector(`.col${col}.row${row}`)
        ?.classList.add(`${styles.error}`);

      document
        .querySelector(
          `.col${existsRow?.[0]?.column}.row${existsRow?.[0]?.row}`
        )
        ?.classList.add(`${styles.error}`);
      document
        .querySelector(
          `.col${existsColumn?.[0]?.column}.row${existsColumn?.[0]?.row}`
        )
        ?.classList.add(`${styles.error}`);
      document
        .querySelector(
          `.col${existsBox?.[0]?.column}.row${existsBox?.[0]?.row}`
        )
        ?.classList.add(`${styles.error}`);
      setMistakes((mistakes) => (mistakes += 1));
    } else {
      // console.log(sudokuArr);
      document
        .querySelector(`.col${col}.row${row}`)
        .classList.remove(`${styles.error}`);
      document
        .querySelectorAll(`.col${col}`)
        ?.forEach((colClass) => colClass.classList.remove(`${styles.error}`));
      document
        .querySelectorAll(`.row${row}`)
        ?.forEach((rowClass) => rowClass.classList.remove(`${styles.error}`));
      document
        .querySelectorAll(
          `.box${Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1}`
        )
        ?.forEach((boxClass) => boxClass.classList.remove(`${styles.error}`));
    }
  };

  const cellFocusHandler = (col, row) => {
    const previous = document.querySelector(`.${styles.focused}`);
    previous && previous.classList.remove(`${styles.focused}`);
    document
      .querySelector(`.col${col}.row${row}`)
      .classList.add(`${styles.focused}`);

    const helpRows = document.querySelectorAll(`.row${row}`);
    const helpCols = document.querySelectorAll(`.col${col}`);
    const helpBox = document.querySelectorAll(
      `.box${Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1}`
    );

    helpRows.forEach((row) => {
      row.classList.add(`${styles.helper}`);
    });
    helpCols.forEach((col) => {
      col.classList.add(`${styles.helper}`);
    });
    helpBox.forEach((box) => {
      box.classList.add(`${styles.helper}`);
    });
  };

  const cellLeaveHandler = (col, row) => {
    const rows = document.querySelectorAll(`.row${row}`);
    const cols = document.querySelectorAll(`.col${col}`);
    const helpBox = document.querySelectorAll(
      `.box${Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1}`
    );

    rows.forEach((row) => {
      row.classList.remove(`${styles.helper}`);
    });
    cols.forEach((col) => {
      col.classList.remove(`${styles.helper}`);
    });
    helpBox.forEach((box) => {
      box.classList.remove(`${styles.helper}`);
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
          className={`${styles.cell} col${col} row${row} box${
            Math.floor(col / 3) * 3 + Math.floor(row / 3) + 1
          }`}
          style={{
            marginRight: row === 2 || row === 5 ? "2rem" : "0px",
            marginBottom: col === 2 || col === 5 ? "1rem" : "0px",
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
            onBlur = {() => cellLeaveHandler(col, row)}
          />
        </div>
      );
      noOfCell++;
    }
    cellsSet.push(cells);
  }
  return cellsSet;
};
