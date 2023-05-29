import Pizza from "../../../models/menu/Pizza";
import { Card, CardActionArea, CardActions, CardContent } from "@mui/material";
import PizzaTitle from "../../atoms/menu/PizzaTitle";
import PizzaImage from "../../atoms/menu/PizzaImage";
import classes from "./PizzaCard.module.scss";
import PizzaPrice from "../../atoms/menu/PizzaPrice";
import PizzaAmountPicker from "../../atoms/menu/PizzaAmountPicker";
import PizzaAddToCart from "../../atoms/menu/PizzaAddToCart";
import usePizzaAdd from "../../../hooks/pizzaAdd";

type Props = { item: Pizza };

const PizzaCard = (props: Props) => {
  const { amount, setAmount, handleClickAddToCart, error, setError } =
    usePizzaAdd();

  return (
    <Card sx={{ m: 1, p: 1 }}>
      <CardActionArea>
        <PizzaImage imgLink={props.item.imageLink} />
        <CardContent>
          <div className={classes.textContainer}>
            <PizzaTitle title={props.item.name} />
            <PizzaPrice price={props.item.price} />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ justifyContent: "space-between", alignItems: "baseline" }}
      >
        <PizzaAmountPicker
          value={amount}
          setValue={setAmount}
          error={error}
          setError={setError}
        />
        <PizzaAddToCart onAddToCartClickHandler={handleClickAddToCart} />
      </CardActions>
    </Card>
  );
};

export default PizzaCard;
