import { useNavigate } from "react-router-dom";
import { Adress } from "../../../models/adress/Adress";
import { Typography } from "@mui/material";

type Props = {
  adress: Adress | null;
  onClickHandler: () => void;
};

const AdressSelectedMenuView = (props: Props) => {
  const title = props.adress ? props.adress.name : "No adress selected";
  const onClickHandler = () => {
    props.onClickHandler();
  };
  return (
    <Typography
      variant="h6"
      sx={{
        position: "absolute",
        whiteSpace: "nowrap",
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={onClickHandler}
    >
      {title}
    </Typography>
  );
};

export default AdressSelectedMenuView;
