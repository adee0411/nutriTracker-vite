import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

import Home from "./routes/Home/Home";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </CssVarsProvider>
  );
}

export default App;
