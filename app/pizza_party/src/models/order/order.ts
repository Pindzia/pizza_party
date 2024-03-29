import { CartItem } from "../../store/cart-slice";
import { Adress } from "../adress/Adress";

type OrderModel = {
  id: string | number;
  address: Adress | null;
  cartItems: CartItem[];
  payment: boolean;
};

export default OrderModel;
