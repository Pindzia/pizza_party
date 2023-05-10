import { Box, Button, Icon, Typography } from "@mui/material";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
  pages: string[];
};

type State = Record<string, never>;

class RegularMenu extends Component<Props, State> {
  state = {};

  render() {
    return [
      <Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <img src="src/assets/pizza_logo.png" alt="pizza icon" />
      </Icon>,
      <Typography
        variant="h6"
        noWrap
        component={NavLink}
        to="/"
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
        Pizza Party
      </Typography>,
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {this.props.pages.map((page) => (
          <Button
            component={NavLink}
            to={"/" + page.toLowerCase()}
            key={page + "regular"}
            onClick={this.props.handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
            className=""
          >
            {page}
          </Button>
        ))}
      </Box>,
    ];
  }
}

export default RegularMenu;
