import { createSlice } from "@reduxjs/toolkit";

const initialMemoryState = {
  memoryLvl: localStorage.getItem("memoryLvl") || undefined,
};

const memorySlice = createSlice({
  name: "memory",
  initialState: initialMemoryState,

  reducers: {
    selectLevel(state, action) {
      const { lvl } = action.payload;
      state.sudokuLvl = lvl;
      localStorage.setItem("memoryLvl", lvl.toString());
    },
  },
});

export default memorySlice.reducer;
export const memoryActions = memorySlice.actions;
