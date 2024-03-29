import { List, SwipeableDrawer, Box } from "@mui/material";
import AdressContext from "../../../contexts/adress-context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Adress } from "../../../models/adress/Adress";
import Divider from "@mui/material/Divider";
import AddressAddListItem from "../../molecules/adress/AdressAddListItem";
import AdressList from "./AdressList";

type Props = {
  selectedAdress: Adress | null;
};

const AdressPicker = (props: Props) => {
  const ctx = useContext(AdressContext);
  const changeAdress = (adress: Adress) => {
    ctx.onAdressSelection(adress);
  };
  const adressList = useSelector<RootState, Adress[]>(
    (state: RootState) => state.adress.adressCollection
  );

  return (
    <SwipeableDrawer
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 3 }}
      anchor="right"
      open={ctx.isOpen}
      role="presentation"
      onClick={() => ctx.onInteraction(false)}
      onKeyDown={() => ctx.onInteraction(false)}
      onClose={() => ctx.onInteraction(false)}
      onOpen={() => ctx.onInteraction(true)}
    >
      <Box>
        <AdressList
          adressList={adressList}
          selectedAdress={props.selectedAdress}
          changeAdress={changeAdress}
        />
        <Divider />
        <List>
          <AddressAddListItem key="addition" />
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default AdressPicker;
