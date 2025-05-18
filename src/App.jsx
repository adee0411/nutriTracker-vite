import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./routes/Home/Home";
import DashboardLayout from "./routes/Dashboard/DashboardLayout";
import DashboardIndex from "./routes/Dashboard/DashboardIndex";
import AuthProvider from "../backend/authentication/AuthProvider";

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
        <RouterProvider router={router}></RouterProvider>
      </CssVarsProvider>
    </AuthProvider>
  );
}

export default App;
