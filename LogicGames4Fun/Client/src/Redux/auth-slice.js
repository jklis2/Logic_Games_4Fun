import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./thunks/fetchUserData";
import { loginUser } from "./thunks/loginUser";
import { logoutUser } from "./thunks/logoutUser";
import { registerUser } from "./thunks/registerUser";

const initialAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.error = true;
        state.errorMessage = "Failed to register";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.error = true;
        state.errorMessage = "Failed to login";
      })
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
