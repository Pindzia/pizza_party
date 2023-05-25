import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import classes from "./MobileMenuNavLink.module.scss";

type Props = {
  handleCloseNavMenu: () => void;
  page: string;
};

const MobileMenuNavLink = (props: Props) => {
  const refLink = React.useRef<HTMLAnchorElement>(null);
  const handleClick = () => {
    refLink.current?.click();
  };
  return (
    <MenuItem onClick={handleClick}>
      <NavLink
        ref={refLink}
        className={({ isActive, isPending }) =>
          isActive ? classes.activeNavLink : ""
        }
        to={"/" + props.page.toLowerCase()}
        onClick={props.handleCloseNavMenu}
      >
        <Typography textAlign="center">{props.page}</Typography>
      </NavLink>
    </MenuItem>
  );
};

export default MobileMenuNavLink;
