import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../components/pages/Home";
import Menu, { loader as pizzaLoader } from "../components/pages/Menu";
import Error from "../components/pages/Error";
import NewAdress, {
  loader as adressLoader,
} from "../components/pages/NewAdress"; // ,
import { action as saveAdressAction } from "../components/templates/adress/AdressForm";
import { action as saveOrderAction } from "../components/pages/Order";
import Order from "../components/pages/Order";
import EditAdress from "../components/pages/EditAdress";
import { QueryClient } from "@tanstack/react-query";
import AdressDisplay from "../components/organisms/order/AdressDisplay";
import CartShower from "../components/organisms/order/CartShower";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout children={null} />,
    id: "root",
    loader: adressLoader(queryClient),
    children: [
      { path: "/home", index: true, element: <Home /> },
      { path: "/menu", element: <Menu />, loader: pizzaLoader },
      {
        path: "/adress",
        element: <NewAdress />,
        action: saveAdressAction(queryClient),
      },
      {
        path: "/adress/edit/:id",
        element: <EditAdress />,
        action: saveAdressAction(queryClient),
      },
      {
        path: "/order",
        element: <Order />,
        action: saveOrderAction,
        children: [
          {
            path: "adress",
            index: true,
            element: <AdressDisplay />,
          },
          {
            path: "cart",
            element: <CartShower />,
          },
          {
            path: "payment",
            element: <CartShower />,
          },
          {
            path: "summary",
            element: <CartShower />,
          },
        ],
      },
    ],
    errorElement: <RootLayout children={<Error />} />,
  },
]);

export default router;
