import React from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <>
      <Navigator />
      <Container maxWidth="md" sx={{ overflow: "hidden", mb: 9 }}>
        {props.children ?? <Outlet />}
      </Container>
      <Footer />
    </>
  );
};

export default RootLayout;
