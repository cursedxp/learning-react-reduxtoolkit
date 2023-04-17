import { createSlice } from "@reduxjs/toolkit";

//define initial state
const initialState = {
  value: 0,
};

//create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  //define reducers
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//export action
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//export reducers
export default counterSlice.reducer;
