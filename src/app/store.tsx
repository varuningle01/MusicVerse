import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/PlayerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
