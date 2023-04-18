import {configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import sudokuReducer from './sudoku-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        sudoku: sudokuReducer
    }
})

export default store