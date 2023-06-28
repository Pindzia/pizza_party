import { createPortal } from "react-dom";
import Pizza from "../../../models/menu/Pizza";
import { Box, Dialog, DialogContent } from "@mui/material";
import PizzaImage from "../../atoms/menu/PizzaImage";
import useFullscreenDialogLogic from "../../../hooks/fullscreenDialogLogic";
import SpecificDialogTitle from "../../atoms/ui/SpecificDialogTitle";
import PizzaDialogDescription from "../../molecules/menu/PizzaDialogDescription";
import { Fullscreen } from "@mui/icons-material";

type Props = {
  isOpen: boolean;
  handleDialogClose: () => void;
  item: Pizza | null;
};

const PizzaDialog = (props: Props) => {
  const { fullScreen } = useFullscreenDialogLogic();

  const handleClose = () => {
    props.handleDialogClose();
  };
  return createPortal(
    <Dialog fullScreen={fullScreen} open={props.isOpen} onClose={handleClose}>
      <Box width={fullScreen ? 1 : 350}>
        <SpecificDialogTitle
          title={props.item?.name ? props.item.name : ""}
          onCloseHandler={handleClose}
        />
        <DialogContent>
          <PizzaImage imgLink={props.item?.imageLink} />
        </DialogContent>
        <PizzaDialogDescription
          description={props.item?.description}
          ingridients={props.item?.listOfIngredients}
          price={props.item?.price}
        />
      </Box>
    </Dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default PizzaDialog;
