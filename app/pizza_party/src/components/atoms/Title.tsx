import React from "react";
import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Title = (props: Props) => {
  return (
    <Typography component={"h1"} variant={"h3"} sx={{ m: 2, display: "flex" }}>
      {props.children}
    </Typography>
  );
};

export default Title;
