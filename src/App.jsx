import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

import store from "../src/state/store";

import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./routes/Home/Home";
import DashboardIndex from "./routes/Dashboard/DashboardIndex";
import AuthProvider from "../backend/authentication/AuthProvider";
import { Provider } from "react-redux";
import Overview from "./routes/Dashboard/Overview/Overview";
import Settings from "./routes/Dashboard/Settings/Settings";
import AchievementsIndex from "./routes/Achievements/AchievementsIndex";
import RecipesIndex from "./routes/Recipes/RecipesIndex";

const theme = extendTheme({
  //cssVarPrefix: "mode-toggle",
  //colorSchemeSelector: ".demo_mode-toggle-%s",
  fontFamily: {
    body: "Poppins, sans-serif",
    display: "Poppins, sans-serif",
  },
  shadow: {
    xl: "6px 12px 12px rgba(0,0,0,0.2)",
  },
  components: {
    JoyAvatar: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          if (ownerState.size === "xl") {
            return {
              width: 80,
              height: 80,
              fontSize: "2rem",
              padding: "6px",
            };
          }
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    Component: Home,
    index: true,
  },
  {
    path: "dashboard",
    Component: ProtectedRoute,
    children: [
      { Component: DashboardIndex, path: "" },
      {
        Component: Overview,
        path: ":selectedDate",
      },
      {
        Component: Settings,
        path: "settings",
      },
      {
        Component: RecipesIndex,
        path: "recipes",
      },
      {
        Component: AchievementsIndex,
        path: "achievements",
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
