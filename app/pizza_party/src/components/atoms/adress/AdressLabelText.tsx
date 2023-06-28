import { Typography } from "@mui/material";

type Props = {
  Label: string;
};

const AdressLabelText = (props: Props) => {
  return <Typography component="h5">{props.Label + ":"}</Typography>;
};

export default AdressLabelText;
