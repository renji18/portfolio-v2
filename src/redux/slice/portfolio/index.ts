import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const portfolio = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolioData: (state, action) => {
      state.portfolio = action.payload;
    },
  },
});

export const { setPortfolioData } = portfolio.actions;

export default portfolio.reducer;
