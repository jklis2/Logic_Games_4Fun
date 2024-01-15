import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk("game/fetchGames", async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/game/`);
    if (response.status !== 200) {
      throw new Error("Cannot get games");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});
