import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  menuId: string;
};

const MobileMenuButton = (props: Props) => {
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls={props.menuId}
      aria-haspopup="true"
      onClick={props.handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MobileMenuButton;
