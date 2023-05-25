import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../components/pages/Home";
import Menu from "../components/pages/Menu";
import Error from "../components/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout children={null} />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/menu", element: <Menu /> },
    ],
    errorElement: <RootLayout children={<Error />} />,
  },
]);

export default router;
