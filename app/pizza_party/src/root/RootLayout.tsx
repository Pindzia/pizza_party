import { useEffect } from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import { Container } from "@mui/material";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import ScrollUpButtonDial from "../components/organisms/ui/ScrollUpButtonDial";
import NotificationSnackbar from "../components/organisms/ui/NotificationSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { adressActions } from "../store/adress-slice";
import { Adress } from "../models/adress/Adress";
import { AppDispatch, RootState } from "../store";
import useCartLoader from "../hooks/cartLoader";
import useAdressLoader from "../hooks/adressLoader";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  useCartLoader(dispatch);
  useAdressLoader(dispatch);

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
