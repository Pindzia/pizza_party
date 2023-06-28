import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
  bottomLine: React.ReactNode;
};

const OrderStepBox = (props: Props) => {
  return (
    <Box display="flex" flexDirection="column" height="60vh">
      <Box flexGrow={1} sx={{ overflow: "auto" }}>
        {props.children}
      </Box>
      <Box height="10%">{props.bottomLine}</Box>
    </Box>
  );
};

export default OrderStepBox;
