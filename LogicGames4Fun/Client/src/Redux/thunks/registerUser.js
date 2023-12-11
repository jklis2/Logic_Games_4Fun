import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        userData
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      return token;
    } catch (err) {
      throw err;
    }
  }
);
