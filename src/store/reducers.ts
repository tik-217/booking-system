import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import initialState from "./initialState";

const reducers = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPageNumber(state, actions: PayloadAction<number>) {
      state.pageNumber = actions.payload;
    },
    setUserIsRegistered(state, actions: PayloadAction<boolean>) {
      state.userIsRegistered = actions.payload;
    },
    setIsOpenMenu(state, actions: PayloadAction<boolean>) {
      state.isOpenMenu = actions.payload;
    },
  },
});

export const { setPageNumber, setUserIsRegistered, setIsOpenMenu } =
  reducers.actions;

export default reducers.reducer;
