import "./App.css";
import { RouterProvider } from "react-router";
import router from "./utils/RouterDefinition";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
