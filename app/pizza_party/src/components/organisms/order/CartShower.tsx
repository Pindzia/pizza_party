import { RootState } from "../../../store";
import { CartItem } from "../../../store/cart-slice";
import { useSelector } from "react-redux";
import CartList from "../cart/CartList";
import { Box, Button } from "@mui/material";
import useOrderContext from "../../../contexts/order-context";
import { useNavigate } from "react-router-dom";
import OrderStepBox from "../../templates/order/OrderStepBox";

const CartShower = () => {
  const cartList = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );
  const ctx = useOrderContext();
  const navigate = useNavigate();
  return (
    <OrderStepBox
      bottomLine={
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            height: 1,
            m: 2,
          }}
        >
          <Button
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
            onClick={() => {
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
      </Box>
    </OrderStepBox>
  );
};

export default CartShower;
