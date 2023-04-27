import { createSlice } from "@reduxjs/toolkit";

const initialSudokuState = {
    level: localStorage.getItem("lvl") || undefined
}

const sudokuSlice = createSlice({
    name: "sudoku",
    initialState: initialSudokuState,

    reducers: {
        selectLevel(state, action) {
            const {lvl} = action.payload;
            state.level = lvl; 
            localStorage.setItem("lvl", lvl.toString())
        }
    }
})

export default sudokuSlice.reducer;
export const sudokuActions = sudokuSlice.actions;