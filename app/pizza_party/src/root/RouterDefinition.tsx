import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../components/pages/Home";
import Menu, { loader as pizzaLoader } from "../components/pages/Menu";
import Error from "../components/pages/Error";
import NewAdress, {
  loader as adressLoader,
} from "../components/pages/NewAdress"; // ,
import { action as saveAdressAction } from "../components/templates/adress/AdressForm";
import EditAdress from "../components/pages/EditAdress";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout children={null} />,
    loader: adressLoader(queryClient),
    children: [
      { path: "/home", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: pizzaLoader },
      {
        path: "/adress",
        element: <NewAdress />,
        action: saveAdressAction(queryClient),
        children: [
          {
            path: "edit/:id",
            element: <EditAdress />,
            action: saveAdressAction(queryClient),
          },
        ],
      },
    ],
    errorElement: <RootLayout children={<Error />} />,
  },
]);

export default router;
