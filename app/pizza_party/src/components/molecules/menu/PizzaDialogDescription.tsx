import { DialogContentText } from "@mui/material";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  ListSubheader,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

type Props = {
  description: string | undefined;
  ingridients: string[] | undefined;
  price: number | undefined;
};

const PizzaDialogDescription = (props: Props) => {
  return (
    <DialogContentText>
      <Box sx={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography component="span" m={2}>
            {props.description}
          </Typography>
          <Typography component="span" m={2}>
            {props.price?.toFixed(2) + "$"}
          </Typography>
        </Box>
        <ListSubheader component="h2">Ingridients:</ListSubheader>
        <List>
          {props.ingridients &&
            props.ingridients.map((ingridient) => (
              <ListItem key={ingridient}>
                <FiberManualRecordIcon sx={{ fontSize: 12, mr: 2 }} />
                <ListItemText primary={ingridient} />
              </ListItem>
            ))}
        </List>
      </Box>
    </DialogContentText>
  );
};

export default PizzaDialogDescription;
