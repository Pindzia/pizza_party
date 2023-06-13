import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const AdressAddListItem = () => {
  const navigate = useNavigate();
  return (
    <ListItem key={new Date().toDateString()}>
      <ListItemButton
        onClick={() => {
          navigate("/adress");
        }}
      >
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Click to add new adress" />
      </ListItemButton>
    </ListItem>
  );
};

export default AdressAddListItem;
