import { Box, Icon, IconButton, Menu, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
  pages: string[];
};

type State = Record<string, never>;

class MobileMenu extends Component<Props, State> {
  state = {};

  render() {
    return [
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={this.props.handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.props.anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(this.props.anchorElNav)}
          onClose={this.props.handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {this.props.pages.map((page) => (
            <NavLink
              key={page + "mobile"}
              to={"/" + page.toLowerCase()}
              onClick={this.props.handleCloseNavMenu}
            >
              <Typography textAlign="center">{page}</Typography>
            </NavLink>
          ))}
        </Menu>
      </Box>,
      <Icon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <img src="src/assets/pizza_logo.png" alt="pizza icon" />
      </Icon>,
      <Typography
        variant="h5"
        noWrap
        component={NavLink}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Pizza Party
      </Typography>,
    ];
  }
}

export default MobileMenu;
