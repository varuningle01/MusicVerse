import { createSlice } from "@reduxjs/toolkit";
import { TAB_LIST } from "../../common/devConstants";

export type dashboardState = {
  currentTab: string;
};

const initialState: dashboardState = {
  currentTab: TAB_LIST.HOME,
};

const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = dashboardSlice.actions;

export default dashboardSlice.reducer;
