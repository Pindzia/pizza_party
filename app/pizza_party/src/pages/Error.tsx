import { Typography } from "@mui/material";
import React, { Component } from "react";

type Props = Record<string, never>;

type State = Record<string, never>;

class Error extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Typography
          variant="h1"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          There is no pizza that you looking for...
        </Typography>
      </div>
    );
  }
}

export default Error;
