import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import musicReducer from "./music-slice";
import achievementReducer from "./achievement-slice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
    music: musicReducer,
    achievement: achievementReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
