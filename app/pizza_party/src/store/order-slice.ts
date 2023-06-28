import { createSlice } from "@reduxjs/toolkit";
import OrderModel from "../models/order/order";

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
    completeOrder(state) {
      if (state.currentOrder) {
        state.orders.push(state.currentOrder);
        state.currentOrder = null;
      }
    },
  },
});

export const uiActions = orderSlice.actions;

export default orderSlice.reducer;
