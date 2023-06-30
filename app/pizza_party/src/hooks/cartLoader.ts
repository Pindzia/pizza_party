import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchCartData, sendCartData } from "../store/cart-actions";
import { CartState } from "../store/cart-slice";

let isInitial = true;
const useCartLoader = (dispatch: AppDispatch) => {
  const cart = useSelector<RootState, CartState>(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed)
      dispatch(
        sendCartData({ items: cart.items, totalQuantity: cart.totalQuantity })
      );
  }, [cart, dispatch]);
};

export default useCartLoader;
