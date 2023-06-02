import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import React from "react";

type Props = {
  formGroupTitle: string;
  formGroupInputs: JSX.Element[];
};

const AdressFormGroup = (props: Props) => {
  return (
    <>
      <Typography variant="h5" marginLeft={1}>
        {props.formGroupTitle}
      </Typography>
      <Paper elevation={2} sx={{ width: 1, m: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            },
            gap: 2,
            p: 2,
          }}
        >
          {props.formGroupInputs}
        </Box>
      </Paper>
    </>
  );
};

export default AdressFormGroup;
