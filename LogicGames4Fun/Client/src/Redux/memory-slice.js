import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lvl: localStorage.getItem()
}

const memorySlice = createSlice({
    name: 'memory', 
    initialState : initialState,
    reducers: {

    }
})

export default memorySlice.reducer;
export const memoryActions = memorySlice.actions