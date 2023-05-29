import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Skeleton,
} from "@mui/material";

const PizzaCardLoader = () => {
  return (
    <Card sx={{ m: 1, p: 1 }}>
      <CardActionArea>
        <Skeleton variant="rectangular" width="100%" height={230} />
        <CardContent>
          <Skeleton variant="text" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Skeleton variant="text" width="100%" />
      </CardActions>
    </Card>
  );
};

export default PizzaCardLoader;
