import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userListReducer from "../features/userlist/userListSlice";

//Create store
export const store = configureStore({
  reducer: { counter: counterReducer, userList: userListReducer },
});
