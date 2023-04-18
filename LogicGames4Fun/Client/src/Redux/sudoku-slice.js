import { createSlice } from "@reduxjs/toolkit";

const initialSudokuState = {
    level: undefined
}

const sudokuSlice = createSlice({
    name: "sudoku",
    initialState: initialSudokuState,

    reducers: {
        selectLevel(state, action) {
            const {lvl} = action.payload;
            state.level = lvl; 
        }
    }
})

export default sudokuSlice.reducer;
export const sudokuActions = sudokuSlice.actions;