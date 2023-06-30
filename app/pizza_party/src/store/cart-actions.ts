import { uiActions } from "./ui-slice";
import { CartItem } from "./cart-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartData = createAsyncThunk(
  "cart/fetchData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://react-http-practise-696f5-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      dispatch(
        uiActions.showNotification({
          fromWhere: "Fetch Cart Data",
          title: "Cart Data Retrieved!",
          message: "Downloaded Cart!",
          type: "success",
        })
      );
      return data;
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          fromWhere: "Fetch Cart Data",
          title: "Failed to get cart data!",
          message: "Failed to download cart!!",
          type: "error",
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const sendCartData = createAsyncThunk(
  "cart/sendData",
  async (
    payload: {
      items: CartItem[];
      totalQuantity: number;
    },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await fetch(
        "https://react-http-practise-696f5-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: payload.items,
            totalQuantity: payload.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      dispatch(
        uiActions.showNotification({
          fromWhere: "Fetch Cart Data",
          title: "Cart Data Retrieved!",
          message: "Successfully added!",
          type: "success",
        })
      );
      return data;
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          fromWhere: "Fetch Cart Data",
          title: "Failed to get cart data!",
          message: "Failed to add to cart!",
          type: "error",
        })
      );
      return rejectWithValue(error.message);
    }
  }
);
