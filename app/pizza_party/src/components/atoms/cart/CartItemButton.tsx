import React from "react";
import { CartItem } from "../../../store/cart-slice";
import { IconButton } from "@mui/material";

type Props = {
  children: React.ReactNode;
  item: CartItem;
  handleClick: (item: CartItem) => void;
};

const CartItemButton = (props: Props) => {
  return (
    <IconButton
      sx={{ width: "40px", height: "40px", padding: "8px" }}
      onClick={() => {
        props.handleClick(props.item);
      }}
    >
      {props.children}
    </IconButton>
  );
};

export default CartItemButton;
