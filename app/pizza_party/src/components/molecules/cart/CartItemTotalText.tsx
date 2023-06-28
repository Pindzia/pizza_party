import { ListItemText } from "@mui/material";
import { CartItem } from "../../../store/cart-slice";

type Props = {
  item: CartItem;
};

const CartItemTotalText = (props: Props) => {
  return (
    <ListItemText
      sx={{ paddingTop: "8px", paddingBottom: "4px" }}
      primary={"Total: " + props.item.totalPrice.toFixed(2) + "$"}
    />
  );
};

export default CartItemTotalText;
