import { AppBar, Container, Toolbar } from "@mui/material";
import React, { Component } from "react";
import RegularMenu from "./nav/RegularMenu";
import MobileMenu from "./nav/MobileMenu";

type Props = Record<string, never>;

type State = {
  anchorElNav: null | HTMLElement;
  anchorElUser: null | HTMLElement;
};

class Navigator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    anchorElNav: null,
    anchorElUser: null,
  };

  useMenuState = () => {
    return {
      ...this.state,
      handleCloseNavMenu: this.handleCloseNavMenu,
      handleOpenNavMenu: this.handleOpenNavMenu,
      pages: ["Home", "Menu"],
    };
  };

  handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ ...this.state, anchorElNav: event.currentTarget });
  };

  handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ ...this.state, anchorElUser: event.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ ...this.state, anchorElNav: null });
  };

  handleCloseUserMenu = () => {
    this.setState({ ...this.state, anchorElUser: null });
  };

  render() {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <RegularMenu {...this.useMenuState()} />
            <MobileMenu {...this.useMenuState()} />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default Navigator;
