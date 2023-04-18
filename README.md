# Simple Project with Redux Toolkit

## Introduction

In this project, I used Redux Toolkit to manage the state of my application. Redux Toolkit provides a set of tools that simplify the process of setting up a Redux store and writing reducers.

## Learnings

### Creation of Store and Slice

I started by creating a Redux store using `configureStore` function from Redux Toolkit. Then I defined a slice using `createSlice` function. A slice represents a part of the application state and contains a reducer function to update that state.

### Reaching Application State

I used the `useSelector` hook from `react-redux` to access the application state. This hook allows me to select specific parts of the state and subscribe to changes in those parts.

### Updating Application State

To update the application state, I used the `dispatch` function provided by `react-redux`. I dispatched actions that were defined by the slice. These actions were handled by the reducer function to update the state.

### Dispatching using AsyncThunk for API Connections

To handle API connections, I used `createAsyncThunk` function from Redux Toolkit. This function allows me to dispatch actions that represent the different stages of an asynchronous operation - pending, fulfilled and rejected. I defined an asynchronous function that made the API call and dispatched these actions accordingly.

## Resources

- Redux Toolkit Tutorial Series on YouTube: https://www.youtube.com/watch?v=0awA5Uw6SJE&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3
