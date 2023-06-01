import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  children: React.ReactNode;
  title: string;
};

const PizzaDialogTitle = (props: Props) => {
  return (
    <DialogTitle sx={{}}>
      {props.title}
      {props.children != null && props.children}
    </DialogTitle>
  );
};

export default PizzaDialogTitle;
