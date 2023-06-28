import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import { CartItem } from "../../../store/cart-slice";
import usePizzaAdd from "../../../hooks/pizzaAdd";
import CartItemButton from "../../atoms/cart/CartItemButton";

type Props = {
  item: CartItem;
};

const CartListButtonSet = (props: Props) => {
  const { handleClickAddToCart, handleRemoveFromCart } = usePizzaAdd();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <CartItemButton
        item={props.item}
        handleClick={() => {
          handleClickAddToCart(props.item);
        }}
      >
        <AddIcon />
      </CartItemButton>

      <CartItemButton
        item={props.item}
        handleClick={() => {
          handleRemoveFromCart(props.item.id);
        }}
      >
        <RemoveIcon />
      </CartItemButton>
    </Box>
  );
};

export default CartListButtonSet;
