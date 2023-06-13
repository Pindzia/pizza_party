import AdressIcon from "../../atoms/adress/AdressIcon";
import ListItem, { ListItemBaseProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Adress } from "../../../models/adress/Adress";

interface Props extends ListItemBaseProps {
  adress: Adress;
  onChangeAdressHandler: (adress: Adress) => void;
  isSelected?: boolean;
}

const AdressListItem = (props: Props) => {
  return (
    <ListItem key={props.adress.name}>
      <ListItemButton
        selected={props.isSelected}
        onClick={() => {
          props.onChangeAdressHandler(props.adress);
        }}
      >
        <ListItemIcon>
          <AdressIcon />
        </ListItemIcon>
        <ListItemText primary={props.adress.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default AdressListItem;
