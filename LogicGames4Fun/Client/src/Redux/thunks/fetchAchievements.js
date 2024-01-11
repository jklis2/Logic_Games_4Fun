import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAchievements = createAsyncThunk(
  "achievement/fetchAchievements",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/achievement/`
      );
      if (response.status !== 200) {
        throw new Error("Cannot get user data.");
      }
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
