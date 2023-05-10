export const generateFields = (sudokuArr, setSudokuArr, setMistakes, styles, checkSudoku) => {
    const cellsSet = [];
    let noOfCell = 1;

    for (let col = 0; col < 9; col++) {
      let cells = [];
      for (let j = 0; j < 9; j++) {
        const { value } = sudokuArr.find(
          (sud) => sud.column === col && sud.row === j
        );

        cells.push(
          <div
            key={noOfCell}
            className={`${styles.cell} col${col} row${j} box${
              Math.floor(col / 3) * 3 + Math.floor(j / 3) + 1
            }`}
            style={{
              marginRight: j === 2 || j === 5 ? "10px" : "0px",
              marginBottom: col === 2 || col === 5 ? "10px" : "0px",
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
              onChange={(e) => {
                localStorage.setItem('board', JSON.stringify(sudokuArr));
                const check = e.target.value !== '' && checkSudoku(sudokuArr, col, j, +e.target.value);
                const { exists } = check;
                
                if (exists) {
                  const { existsRow, existsColumn, existsBox } = check;
                  (document.querySelector(`.col${col}.row${j}`)).classList.add(`${styles.error}`);
                  (document.querySelector(`.col${existsRow[0].column}.row${existsRow[0].row}`)).classList.add(`${styles.error}`);
                  (document.querySelector(`.col${existsColumn[0].column}.row${existsColumn[0].row}`)).classList.add(`${styles.error}`);
                  (document.querySelector(`.col${existsBox[0].column}.row${existsBox[0].row}`)).classList.add(`${styles.error}`);
                  setMistakes((mistakes) => mistakes+=1)             
                }

                if(!exists || e.target.value === '') {
                  const errorElements = document.querySelectorAll(`.${styles.error}`);
                  errorElements.forEach(element => {
                    element.classList.remove(`${styles.error}`);
                  });
                }
              }}
              onFocus={() => {

                //Middle cell?
                const previous = (document.querySelector(`.${styles.focused}`));
                previous && previous.classList.remove(`${styles.focused}`);
                (document.querySelector(`.col${col}.row${j}`)).classList.add(`${styles.focused}`);


                //Cell helpers
                const helpRows = document.querySelectorAll(`.row${j}`);
                const helpCols = document.querySelectorAll(`.col${col}`);
                const helpBox = document.querySelectorAll(
                  `.box${Math.floor(col / 3) * 3 + Math.floor(j / 3) + 1}`
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
              }}
              onBlur={() => {
                const rows = document.querySelectorAll(`.row${j}`);
                const cols = document.querySelectorAll(`.col${col}`);
                const helpBox = document.querySelectorAll(
                  `.box${Math.floor(col / 3) * 3 + Math.floor(j / 3) + 1}`
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
              }}
            />
          </div>
        );
        noOfCell++;
      }
      cellsSet.push(cells);
    }
    return cellsSet;
  };