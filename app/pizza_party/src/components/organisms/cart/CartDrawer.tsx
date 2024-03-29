import { Box, SwipeableDrawer, Button } from "@mui/material";
import { useDrawerHandlerLogic } from "../../../hooks/drawerHandlerLogic";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../../store/cart-slice";
import { RootState } from "../../../store";
import { useNavigate } from "react-router-dom";
import CartList from "./CartList";
import { orderActions } from "../../../store/order-slice";

type Props = {
  handlerLogic: ReturnType<typeof useDrawerHandlerLogic>;
};

const CartDrawer = (props: Props) => {
  const cartList = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <SwipeableDrawer
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 4, width: "330px" }}
      anchor="right"
      open={props.handlerLogic.isOpen}
      role="presentation"
      onKeyDown={() => props.handlerLogic.onInteraction(false)}
      onClose={() => props.handlerLogic.onInteraction(false)}
      onOpen={() => props.handlerLogic.onInteraction(true)}
    >
      <Box sx={{ width: "300px" }}>
        <Box>
          <CartList cartList={cartList} />
        </Box>
        {cartList && cartList.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
            <Button
              color="info"
              onClick={() => {
                dispatch(
                  orderActions.createOrder({
                    id: 1,
                    address: null,
                    cartItems: [],
                    payment: false,
                  })
                );

                props.handlerLogic.onInteraction(false);
                navigate("/order");
              }}
            >
              Proceede Order
            </Button>
          </Box>
        )}
      </Box>
    </SwipeableDrawer>
  );
};

export default CartDrawer;
