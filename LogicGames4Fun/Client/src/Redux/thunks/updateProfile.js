import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfilePath = createAsyncThunk(
  "user/updateProfilePath",
  async (userLogin, thunkAPI) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/auth/`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
