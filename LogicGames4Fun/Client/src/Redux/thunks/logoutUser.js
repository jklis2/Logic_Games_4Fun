import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutUser = createAsyncThunk("user/logout", async () => {
  localStorage.removeItem("token");
});
