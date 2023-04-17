import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

//Create store
export const store = configureStore({
  reducer: counterReducer,
});
