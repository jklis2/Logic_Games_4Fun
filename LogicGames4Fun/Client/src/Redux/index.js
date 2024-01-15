import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import musicReducer from "./music-slice";
import achievementReducer from "./achievement-slice";
import gameReducer from "./game-slice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authReducer,
    music: musicReducer,
    achievement: achievementReducer,
    game: gameReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
