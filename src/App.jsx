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
  //cssVarPrefix: "mode-toggle",
  //colorSchemeSelector: ".demo_mode-toggle-%s",
  fontFamily: {
    body: "Poppins, sans-serif",
    display: "Poppins, sans-serif",
  },
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
      <Provider store={store}>
        <CssVarsProvider theme={theme}>
          <RouterProvider router={router}></RouterProvider>
        </CssVarsProvider>
      </Provider>
    </AuthProvider>
  );
}

export default App;
