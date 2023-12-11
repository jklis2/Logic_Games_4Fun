import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ login, password }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          login,
          password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      throw error;
    }
  }
);
