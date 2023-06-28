import { Dialog } from "@mui/material";
import { Adress } from "../../../models/adress/Adress";
import AdressList from "../adress/AdressList";
import useFullscreenDialogLogic from "../../../hooks/fullscreenDialogLogic";
import { Box, DialogContent } from "@mui/material";
import SpecificDialogTitle from "../../atoms/ui/SpecificDialogTitle";

type Props = {
  open: boolean;
  selectedAdress: Adress | null;
  changeAdress: (adress: Adress) => void;
  closeDialog: () => void;
  adressList: Adress[];
};

const AdressDialogPicker = (props: Props) => {
  const { fullScreen } = useFullscreenDialogLogic();
  return (
    <Dialog
      open={props.open}
      fullScreen={fullScreen}
      onClose={props.closeDialog}
    >
      <SpecificDialogTitle
        title={"Select Adress:"}
        onCloseHandler={props.closeDialog}
      />
      <DialogContent>
        <Box sx={{ height: 1, width: fullScreen ? 1 : 350, overflow: "auto" }}>
          <AdressList
            adressList={props.adressList}
            selectedAdress={props.selectedAdress}
            changeAdress={props.changeAdress}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AdressDialogPicker;
