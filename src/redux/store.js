import { configureStore } from "@reduxjs/toolkit";
import podcatsReducer from "./podcatsSlice";
export const store = configureStore({
  reducer: {
    podcats: podcatsReducer,
  },
});
