import "./App.css";
import { RouterProvider } from "react-router";
import router, { queryClient } from "./root/RouterDefinition";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
