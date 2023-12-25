import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import musicReducer from "./music-slice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
    music: musicReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
