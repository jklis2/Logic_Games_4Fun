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
  async () => {
    const headers = {
      Authorization: `Bearer ${initialAuthState.token}`,
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

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    getUser(state) {
      const headers = {
        Authorization: `Bearer ${state.token}`,
        "Content-Type": "application/json",
      };

      axios
        .get(`${API_URL}/auth/`, {
          headers,
        })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Cannot get user data.");
          }
          return res.data;
        })
        .then((data) => {
          return data;
        })
        .catch((err) => console.log(err));
    },

    register(_, action) {
      const data = action.payload;

      axios
        .post(`${API_URL}/auth/register`, data)
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
        })
        .catch((err) => console.log(err));
    },
    login(_, action) {
      const { login, password } = action.payload;
      axios
        .post(`${API_URL}/auth/login`, {
          login,
          password,
        })
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
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      console.log(state.error);
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
