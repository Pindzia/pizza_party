import DialogTitle from "@mui/material/DialogTitle";
import DialogCloseButton from "./DialogCloseButton";

type Props = {
  title: string;
  onCloseHandler: () => void;
};

const SpecificDialogTitle = (props: Props) => {
  return (
    <DialogTitle sx={{}}>
      {props.title}
      <DialogCloseButton onCloseHandler={props.onCloseHandler} />
    </DialogTitle>
  );
};

export default SpecificDialogTitle;
