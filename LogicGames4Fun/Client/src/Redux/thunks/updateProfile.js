import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfile = createAsyncThunk(
  "user/updateProfilePath",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const headers = {
      Authorization: `Bearer ${state.auth.token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/`,
        data,
        { headers }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
