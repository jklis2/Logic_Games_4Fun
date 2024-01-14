import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendMessage = createAsyncThunk(
  "user/login",
  async ({ name, email, message }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/contact/send`,
        {
          name,
          email,
          message,
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);
