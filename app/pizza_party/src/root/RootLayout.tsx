import React, { Component } from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

type State = Record<string, never>;

class RootLayout extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <>
        <Navigator />
        <Container maxWidth="md">{this.props.children ?? <Outlet />}</Container>
        <Footer />
      </>
    );
  }
}

export default RootLayout;
