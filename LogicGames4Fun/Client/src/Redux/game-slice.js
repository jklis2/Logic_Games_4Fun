import { createSlice } from "@reduxjs/toolkit";
import { fetchGames } from "./thunks/fetchGames";

const initialGameState = {
  games: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload;
    });
  },
});

export default gameSlice.reducer;
