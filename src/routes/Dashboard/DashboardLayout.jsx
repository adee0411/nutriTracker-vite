import { Grid, Sheet, Typography } from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <Grid container columns={12}>
      <Sidebar />
      <Grid lg={10} sm={8} xs={12}>
        <header style={{ height: "100px" }}>
          <Typography
            level="title-lg"
            color="primary"
            fontWeight="bold"
            fontSize={30}
            padding={2}
          >
            HEADER
          </Typography>
        </header>
        <main style={{ minHeight: "calc(100vh - 100px)" }}>
          <Sheet color="neutral" variant="soft" sx={{ height: "inherit" }}>
            <Outlet />
          </Sheet>
        </main>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
