import { createSlice } from "@reduxjs/toolkit";
import OrderModel from "../models/order/order";
import { Adress } from "../models/adress/Adress";
import { CartItem } from "./cart-slice";

type OrderState = {
  currentOrder: OrderModel | null;
  orders: OrderModel[];
};

const initialState: OrderState = {
  currentOrder: null,
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    createOrder(state, { payload }: { payload: OrderModel }) {
      state.currentOrder = payload;
    },
    modifyOrder(state, { payload }: { payload: OrderModel }) {
      state.currentOrder = payload;
    },
    setAdress(state, { payload }: { payload: Adress }) {
      if (state.currentOrder) {
        state.currentOrder.address = payload;
      }
    },
    setCart(state, { payload }: { payload: CartItem[] }) {
      if (state.currentOrder) {
        state.currentOrder.cartItems = payload;
      }
    },
    completeOrder(state) {
      if (state.currentOrder) {
        state.orders.push(state.currentOrder);
        state.currentOrder = null;
      }
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
