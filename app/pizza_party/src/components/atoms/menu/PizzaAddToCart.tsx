import { Chip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StyledIconWrapper from "./StyledIconWrapper";

type Props = {
  onAddToCartClickHandler: () => void;
};

const PizzaAddToCart = (props: Props) => {
  return (
    <Chip
      onClick={props.onAddToCartClickHandler}
      avatar={
        <StyledIconWrapper>
          <ShoppingCartIcon />
        </StyledIconWrapper>
      }
      color="primary"
      label="Add to cart"
    ></Chip>
  );
};

export default PizzaAddToCart;
