import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

type Props = {
  onClick: (value: boolean) => void;
};

const CartBadge = (props: Props) => {
  const totalQuantity = useSelector<RootState, number>(
    (state) => state.cart.totalQuantity
  );
  const handleClick = () => {
    props.onClick(true);
  };
  return (
    <Box sx={{ display: "flex", mr: 1 }} onClick={handleClick}>
      <Badge badgeContent={totalQuantity} color="warning">
        <ShoppingCartIcon sx={{ fontSize: 35 }} />
      </Badge>
    </Box>
  );
};

export default CartBadge;
