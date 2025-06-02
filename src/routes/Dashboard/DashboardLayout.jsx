// Joy UI Components
import { Box } from "@mui/joy";

import { Outlet } from "react-router-dom";

// Components
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

// Custom CSS styles
import "./DashboardLayout.css";

// ROOT DASHBOARD LAYOUT
const DashboardLayout = () => {
  return (
    <Box className="dashboard-grid">
      <Header />
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
    </Box>
  );
};

export default DashboardLayout;
