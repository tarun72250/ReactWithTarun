//1.
import { configureStore } from "@reduxjs/toolkit";
// export const store = configureStore({
//     reducer: {

//     }
// })

//2.
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

