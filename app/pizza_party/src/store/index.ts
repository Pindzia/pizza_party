import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import cartSliceReducers from "./cart-slice";
import uiSliceReducers from "./ui-slice";
import adressSliceReducers from "./adress-slice";
import orderSlice from "./order-slice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    cart: cartSliceReducers,
    adress: adressSliceReducers,
    ui: uiSliceReducers,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
