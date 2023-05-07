import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./rootReducer"

export const store = configureStore({
  reducer: {
    counterSlice
  }
})