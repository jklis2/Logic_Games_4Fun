import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001";

const initialAuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { getState }) => {
    const state = getState();
    const headers = {
      Authorization: `Bearer ${state.auth.token}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.get(`${API_URL}/auth/`, { headers });
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

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ login, password }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        login,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    register(state, action) {
      const data = action.payload;

      axios
        .post(`${API_URL}/auth/register`, data)
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
        })
        .catch((err) => console.log(err));
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
