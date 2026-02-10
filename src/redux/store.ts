import { configureStore } from "@reduxjs/toolkit";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import portfolioSlice from "./slice/portfolio";

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
  devTools: import.meta.env.MODE !== "production",
});

export type MyDispatch = typeof store.dispatch;

export const MySelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
