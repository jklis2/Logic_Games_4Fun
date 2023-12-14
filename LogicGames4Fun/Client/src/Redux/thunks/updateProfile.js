import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfilePath = createAsyncThunk(
  "user/updateProfilePath",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.put(`/api/user/${userId}/updatePath`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
