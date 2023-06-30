import { List, Divider, ListItem, ListItemText } from "@mui/material";
import { CartItem } from "../../../store/cart-slice";
import CartDrawerItem from "./CartDrawerItem";

type Props = {
  cartList: CartItem[];
};
let key = 0;
const CartList = (props: Props) => {
  return (
    <List>
      {(props.cartList &&
        props.cartList.length > 0 &&
        props.cartList.map((cartItem: CartItem) => (
          <>
            <CartDrawerItem key={key++} item={cartItem} />
            <Divider
              key={key++}
              sx={{
                ml: 2,
                mr: 2,
              }}
            />
          </>
        ))) || (
        <ListItem key={0}>
          <ListItemText primary="Cart is empty" />
        </ListItem>
      )}
    </List>
  );
};

export default CartList;
