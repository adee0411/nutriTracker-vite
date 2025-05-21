import { Box, Sheet } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <Box className="dashboard-grid">
      <Header />
      <Sidebar />
      <main className="dashboard-main">
        <Outlet />
      </main>
      {/**
       *       
      <Box lg={10} md={10} xs={10}>

        <main
          style={{ height: "100vh", paddingTop: "60px", overflowY: "auto" }}
        >
          <Sheet
            color="neutral"
            variant="plain"
            sx={{ height: "100%", padding: 4 }}
          >
            <Outlet />
          </Sheet>
        </main>
      </Box>
       * 
       */}
    </Box>
  );
};

export default DashboardLayout;
