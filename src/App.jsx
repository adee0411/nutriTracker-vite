import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

import store from "../src/state/store";

import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./routes/Home/Home";
import DashboardLayout from "./routes/Dashboard/DashboardLayout";
import DashboardIndex from "./routes/Dashboard/DashboardIndex";
import AuthProvider from "../backend/authentication/AuthProvider";
import { Provider } from "react-redux";

const theme = extendTheme({
  cssVarPrefix: "mode-toggle",
  colorSchemeSelector: ".demo_mode-toggle-%s",
});

const router = createBrowserRouter([
  {
    Component: Home,
    index: true,
  },
  {
    Component: ProtectedRoute,
    path: "/dashboard",
    children: [
      {
        Component: DashboardLayout,
        children: [
          {
            Component: DashboardIndex,
            index: true,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <CssVarsProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </CssVarsProvider>
    </AuthProvider>
  );
}

export default App;
