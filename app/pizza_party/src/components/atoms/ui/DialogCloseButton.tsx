import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  onCloseHandler: () => void;
};

const DialogCloseButton = (props: Props) => {
  return (
    <IconButton
      aria-label="close"
      onClick={props.onCloseHandler}
      sx={{
        position: "absolute",
        right: 10,
        top: 12,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default DialogCloseButton;
