import { useState } from "react";

const usePizzaAdd = () => {
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);
  const handleClickAddToCart = () => {
    if (error) return;
    console.log("Add to cart");
  };
  return {
    amount,
    setAmount,
    error,
    setError,
    handleClickAddToCart,
  };
};

export default usePizzaAdd;
