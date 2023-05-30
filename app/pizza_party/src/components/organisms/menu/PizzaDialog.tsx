import { createPortal } from "react-dom";
import Pizza from "../../../models/menu/Pizza";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@mui/material";
import PizzaDialogTitle from "../../atoms/menu/PizzaDialogTitle";
import PizzaImage from "../../atoms/menu/PizzaImage";

type Props = {
  isOpen: boolean;
  handleDialogClose: () => void;
  item: Pizza | null;
};

const PizzaDialog = (props: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    props.handleDialogClose();
  };
  return createPortal(
    <Dialog fullScreen={fullScreen} open={props.isOpen} onClose={handleClose}>
      <PizzaDialogTitle title={props.item?.name ? props.item.name : ""} />
      <DialogContent>
        <Box
          noValidate
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          <PizzaImage imgLink={props.item?.imageLink} />
        </Box>
      </DialogContent>
      <DialogContentText>{props.item?.description}</DialogContentText>
    </Dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default PizzaDialog;
