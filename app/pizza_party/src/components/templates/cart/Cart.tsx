import CartBadge from "../../organisms/cart/CartBadge";
import CartDrawer from "../../organisms/cart/CartDrawer";
import { useDrawerHandlerLogic } from "../../../hooks/drawerHandlerLogic";

const Cart = () => {
  const handlerLogic = useDrawerHandlerLogic();
  return (
    <>
      <CartBadge onClick={handlerLogic.onInteraction} />
      <CartDrawer handlerLogic={handlerLogic} />
    </>
  );
};

export default Cart;
