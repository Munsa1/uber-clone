import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/newSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
