import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  title: string;
};

const PizzaDialogTitle = (props: Props) => {
  return <DialogTitle>{props.title}</DialogTitle>;
};

export default PizzaDialogTitle;
