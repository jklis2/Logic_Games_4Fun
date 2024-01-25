import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { getState }) => {
    const state = getState();
    const headers = {
      Authorization: `Bearer ${state.auth.token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/`,
        { headers }
      );
      if (response.status !== 200) {
        throw new Error("Cannot get user data.");
      }
      return response.data;
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  }
);
