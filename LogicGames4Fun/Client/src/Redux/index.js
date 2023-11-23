import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import musicReducer from "./music-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    music: musicReducer,
  },
});

export default store;
