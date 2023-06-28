import { ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import { CartItem } from "../../../store/cart-slice";
import CartItemText from "../../molecules/cart/CartItemText";
import CartListButtonSet from "../../molecules/cart/CartListButtonSet";
import CartItemTotalText from "../../molecules/cart/CartItemTotalText";

type Props = {
  item: CartItem;
};

const CartDrawerItem = (props: Props) => {
  return (
    <ListItem key={props.item.id}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <CartItemText item={props.item} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CartItemTotalText item={props.item} />
          <CartListButtonSet item={props.item} />
        </Box>
      </Box>
    </ListItem>
  );
};

export default CartDrawerItem;
