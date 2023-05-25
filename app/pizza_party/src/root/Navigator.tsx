import { AppBar, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
import RegularMenu from "../components/organisms/navigation/RegularMenu";
import MobileMenu from "../components/organisms/navigation/MobileMenu";

type Props = Record<string, never>;

type State = {
  anchorElNav: null | HTMLElement;
  anchorElUser: null | HTMLElement;
};

const Navigator = (props: Props) => {
  const useMenuState = () => {
    const [state, setState] = useState<State>({
      anchorElNav: null,
      anchorElUser: null,
    });
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setState((prevState: State) => {
        return { ...prevState, anchorElNav: event.currentTarget };
      });
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setState((prevState: State) => {
        return { ...prevState, anchorElUser: event.currentTarget };
      });
    };

    const handleCloseNavMenu = () => {
      setState((prevState: State) => {
        return { ...prevState, anchorElNav: null };
      });
    };

    const handleCloseUserMenu = () => {
      setState((prevState: State) => {
        return { ...prevState, anchorElUser: null };
      });
    };
    return {
      ...state,
      handleCloseNavMenu: handleCloseNavMenu,
      handleOpenNavMenu: handleOpenNavMenu,
      pages: ["Home", "Menu"],
    };
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RegularMenu {...useMenuState()} />
          <MobileMenu {...useMenuState()} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigator;
