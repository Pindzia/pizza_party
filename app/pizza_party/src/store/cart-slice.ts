import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  changed: boolean;
};

export type CartItem = CartPushItem & {
  quantity: number;
  totalPrice: number;
};

export type CartPushItem = {
  id: number;
  name: string;
  price: number;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, { payload }: { payload: CartPushItem }) {
      const newItem = payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, { payload }: { payload: number }) {
      const id = payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (!existingItem) return;
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    replaceCart(
      state,
      { payload }: { payload: { items: CartItem[]; totalQuantity: number } }
    ) {
      state.items = payload.items;
      state.totalQuantity = payload.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
