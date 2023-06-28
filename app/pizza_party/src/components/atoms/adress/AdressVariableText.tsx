import React from "react";
import { Typography } from "@mui/material";

type Props = {
  text: React.ReactNode;
};

const AdressVariableText = (props: Props) => {
  return <Typography component="span">{props.text}</Typography>;
};

export default AdressVariableText;
