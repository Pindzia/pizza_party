import { Typography } from "@mui/material";

type Props = {
  title: string;
};

const PizzaTitle = (props: Props) => {
  return (
    <Typography gutterBottom variant="h6" component="div">
      {props.title}
    </Typography>
  );
};

export default PizzaTitle;
