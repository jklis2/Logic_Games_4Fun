import {configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'
import sudokuReducer from './sudoku-slice'
import memoryReducer from './memory-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        sudoku: sudokuReducer,
        memory: memoryReducer
    }
})

export default store