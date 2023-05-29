import { Box, Icon, Menu, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MobileMenuButton from "../../molecules/navigation/MobileMenuButton";
import MobileMenuNavLink from "../../molecules/navigation/MobileMenuNavLink";

type Props = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
  pages: string[];
};

const MobileMenu = (props: Props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <MobileMenuButton
          handleOpenNavMenu={props.handleOpenNavMenu}
          menuId="menu-appbar"
        />
        <Menu
          id="menu-appbar"
          anchorEl={props.anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(props.anchorElNav)}
          onClose={props.handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {props.pages.map((page) => (
            <MobileMenuNavLink
              key={page + "mobile"}
              page={page}
              handleCloseNavMenu={props.handleCloseNavMenu}
            />
          ))}
        </Menu>
      </Box>
      <Icon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <img src="src/assets/pizza_logo.png" alt="pizza icon" />
      </Icon>
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
      </Typography>
    </>
  );
};

export default MobileMenu;
