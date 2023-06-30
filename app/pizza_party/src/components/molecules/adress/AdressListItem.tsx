import AdressIcon from "../../atoms/adress/AdressIcon";
import ListItem, { ListItemBaseProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Adress } from "../../../models/adress/Adress";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { adressActions } from "../../../store/adress-slice";

interface Props extends ListItemBaseProps {
  adress: Adress;
  onChangeAdressHandler: (adress: Adress) => void;
  isSelected?: boolean;
}

const AdressListItem = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ListItem key={props.adress.name}>
      <ListItemButton
        sx={{ width: "60%" }}
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
      <ListItemButton
        sx={{ width: "10%" }}
        onClick={() => {
          navigate(`/adress/edit/${props.adress.id}`);
        }}
      >
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton
        sx={{ width: "10%" }}
        onClick={() => {
          dispatch(
            adressActions.removeAdress(
              props.adress.id ? Number(props.adress.id) : Number(0)
            )
          );
        }}
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

export default AdressListItem;
