import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducers from "./cart-slice";
import adressSliceReducers from "./adress-slice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    cart: cartSliceReducers,
    adress: adressSliceReducers,
  },
});

export default store;
