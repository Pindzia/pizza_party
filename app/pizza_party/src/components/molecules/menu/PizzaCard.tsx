import { Pizza } from "../../../store/cart-slice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";

type Props = { item: Pizza };

const PizzaCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 270, m: 1, p: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="Pizza picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip
          avatar={
            <div style={{ backgroundColor: "transparent" }}>
              <ShoppingCartIcon />
            </div>
          }
          color="primary"
          label="Add to cart"
        ></Chip>
      </CardActions>
    </Card>
  );
};

export default PizzaCard;
