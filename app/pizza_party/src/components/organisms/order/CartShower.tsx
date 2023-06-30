import { RootState } from "../../../store";
import { CartItem } from "../../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../cart/CartList";
import { Box, Button } from "@mui/material";
import useOrderContext from "../../../contexts/order-context";
import { useFetcher, useNavigate } from "react-router-dom";
import OrderStepBox from "../../templates/order/OrderStepBox";
import { useEffect, useRef } from "react";
import { orderActions } from "../../../store/order-slice";
import OrderModel from "../../../models/order/order";

const CartShower = () => {
  const cartList = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );
  const fetcher = useFetcher();
  const { data } = fetcher;
  const ref = useRef(null);
  const ctx = useOrderContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentOrder = useSelector<RootState, OrderModel | null>(
    (state: RootState) => state.order.currentOrder
  );
  useEffect(() => {
    if (cartList) {
      dispatch(orderActions.setCart(cartList));
    }
  }, [cartList, dispatch]);
  return (
    <OrderStepBox
      bottomLine={
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 1,
            m: 2,
          }}
        >
          <Button
            sx={{ display: { xs: "none", md: "hidden" } }}
            onClick={() => {
              ctx.handleBack();
            }}
          >
            BACK
          </Button>
          <Button
            onClick={() => {
              navigate("/menu");
            }}
          >
            Modify cart in Menu
          </Button>
          <Button
            sx={{ display: { xs: "none", md: "hidden" } }}
            onClick={() => {
              if (!currentOrder?.payment) ref.current?.click();
              ctx.handleNext();
            }}
          >
            NEXT
          </Button>
        </Box>
      }
    >
      <Box>
        <CartList cartList={cartList} />
        <fetcher.Form method="PUT" action="/order">
          <input
            type="hidden"
            name="orderData"
            id="orderData"
            value={JSON.stringify(currentOrder)}
          />
          <input type="hidden" name="name" id="name" value={ctx.id} />
          <button ref={ref}></button>
        </fetcher.Form>
      </Box>
    </OrderStepBox>
  );
};

export default CartShower;
