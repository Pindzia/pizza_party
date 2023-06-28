import { CartItem } from "../../store/cart-slice";
import { Adress } from "../adress/Adress";

type OrderModel = {
  id: string;
  address: Adress;
  cartItems: CartItem[];
  payment: boolean;
};

export default OrderModel;
