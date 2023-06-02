import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducers from "./cart-slice";
import adressSliceReducers from "./adress-slice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducers,
    adress: adressSliceReducers,
  },
});

export default store;
