import React from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import { Container } from "@mui/material";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import ScrollUpButtonDial from "../components/organisms/ui/ScrollUpButtonDial";
import NotificationSnackbar from "../components/organisms/ui/NotificationSnackbar";
import { useDispatch } from "react-redux";
import { adressActions } from "../store/adress-slice";
import { Adress } from "../models/adress/Adress";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  const { adresses } = useRouteLoaderData("root");
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function loadAdresses() {
      const result = (await adresses) as Adress[];
      dispatch(adressActions.replaceAdresses(result));
    }
    loadAdresses();
  }, [adresses, dispatch]);
  return (
    <>
      <Navigator />

      <Container maxWidth="md" sx={{ overflow: "hidden", mb: 9 }}>
        {props.children ?? <Outlet />}
      </Container>
      <ScrollUpButtonDial />
      <NotificationSnackbar />
      <Footer />
    </>
  );
};

export default RootLayout;
