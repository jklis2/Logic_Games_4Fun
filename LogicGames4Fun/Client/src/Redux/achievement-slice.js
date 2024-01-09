import { createSlice } from "@reduxjs/toolkit";

const initialAchievementState = {
  achievements: [],
  loading: true,
  error: false,
};

const achievementSlice = createSlice({
  name: "achievement",
  initialState: initialAchievementState,
  extraReducers: (builder) => {
  },
});

export default achievementSlice.reducer;
