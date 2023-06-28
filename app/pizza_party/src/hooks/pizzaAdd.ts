import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartPushItem, cartActions } from "../store/cart-slice";

const usePizzaAdd = () => {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleClickAddToCart = (cartItem: CartPushItem) => {
    if (error) return;
    Array(amount)
      .fill(0)
      .forEach(() => {
        dispatch(cartActions.addItemToCart(cartItem));
      });
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return {
    amount,
    setAmount,
    error,
    setError,
    handleClickAddToCart,
    handleRemoveFromCart,
  };
};

export default usePizzaAdd;
