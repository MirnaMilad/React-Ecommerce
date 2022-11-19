import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterSlice";
import { cartReducer } from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
   counter : counterReducer,
   cart: cartReducer
  }
});
