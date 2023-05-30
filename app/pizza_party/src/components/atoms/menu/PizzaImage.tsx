import { Box, CardMedia } from "@mui/material";
import classes from "./PizzaImage.module.scss";

type Props = {
  imgLink: string | undefined;
};

const PizzaImage = (
  props: Props = {
    imgLink: "https://ps.w.org/wppizza/assets/icon-256x256.png?rev=2498121",
  }
) => {
  return (
    <div className={classes.pizzaImageOverlay}>
      <CardMedia
        component="img"
        className={classes.pizzaImage}
        image={props.imgLink}
        alt="Pizza picture"
        sx={{ maxWidth: 275 }}
      />
    </div>
  );
};

export default PizzaImage;
