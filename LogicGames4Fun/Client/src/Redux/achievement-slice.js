import { createSlice } from "@reduxjs/toolkit";
import { fetchAchievements } from "./thunks/fetchAchievements";

const initialAchievementState = {
  achievements: null,
  loading: true,
  error: false,
};

const achievementSlice = createSlice({
  name: "achievement",
  initialState: initialAchievementState,
  extraReducers: (builder) => {
    builder.addCase(fetchAchievements.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAchievements.fulfilled, (state, action) => {
      state.loading = false;
      state.achievements = action.payload;
    });
    builder.addCase(fetchAchievements.rejected, (state) => {
      state.error = true;
    });
  },
});

export default achievementSlice.reducer;
