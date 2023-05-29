import { Typography } from "@mui/material";

type Props = {
  price: number;
  className?: string;
};

const PizzaPrice = (props: Props) => {
  return (
    <Typography component="div" variant="inherit">
      {props.price.toFixed(2)} $
    </Typography>
  );
};

export default PizzaPrice;
