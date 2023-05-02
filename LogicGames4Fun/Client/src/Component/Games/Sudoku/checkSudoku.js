const checkSudoku = function (sudokuArr, column, row, value) {
  const sudokuObj = sudokuArr.find(
    (su) => su.column === column && su.row === row
  );

  if (!sudokuObj) {
    return {
      exists: true,
      existsRow: [],
      existsColumn: [],
      existsBox: [],
    };
  }

  const { box } = sudokuObj;

  const columnsClone = sudokuArr.filter((su) => su.column === column);
  const rowsClone = sudokuArr.filter((su) => su.row === row);
  const boxClone = sudokuArr.filter((su) => su.box === box);

  const existsRow = rowsClone.filter((row) => row.value === value);
  const existsColumn = columnsClone.filter((column) => column.value === value);
  const existsBox = boxClone.filter((box) => box.value === value);

  if (
    (existsRow.length > 0 && existsRow.indexOf(sudokuObj) === -1) ||
    (existsColumn.length > 0 && existsColumn.indexOf(sudokuObj) === -1) ||
    (existsBox.length > 0 && existsBox.indexOf(sudokuObj) === -1)
  ) {
    return {
      exists: true,
      existsRow,
      existsColumn,
      existsBox,
    };
  }

  sudokuObj.value = value;
  return {
    exists: false,
  };
};

export default checkSudoku;