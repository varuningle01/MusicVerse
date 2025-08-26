import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/playerSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    dashboard: dashboardReducer,
  },
});
