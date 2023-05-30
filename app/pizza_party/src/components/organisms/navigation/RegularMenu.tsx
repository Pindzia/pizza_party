import { Box, Button, Icon, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
  pages: string[];
};

const RegularMenu = (props: Props) => {
  return (
    <>
      <Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <img src="src/assets/pizza_logo.png" alt="pizza icon" />
      </Icon>
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
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Pizza Party
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {props.pages.map((page) => (
          <Button
            component={NavLink}
            to={"/" + page.toLowerCase()}
            key={page + "regular"}
            onClick={props.handleCloseNavMenu}
            sx={{
              my: 2,
              color: "inherit",
              "&.active": {
                color: "red",
                animation:
                  "text-pop-up-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
              },
              display: "block",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default RegularMenu;
