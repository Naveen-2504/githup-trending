import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./slice/trending";

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
  },
});
