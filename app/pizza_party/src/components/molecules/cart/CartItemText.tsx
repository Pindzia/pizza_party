import { CartItem } from "../../../store/cart-slice";
import { ListItemText } from "@mui/material";

type Props = {
  item: CartItem;
};

const CartItemText = (props: Props) => {
  return (
    <>
      <div className="flex flex-row justify-between ">
        <ListItemText primary={props.item.name} />
        <ListItemText
          className="text-right"
          primary={props.item.price + "$" + " x " + props.item.quantity}
        />
      </div>
    </>
  );
};

export default CartItemText;
