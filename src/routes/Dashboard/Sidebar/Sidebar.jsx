import React from "react";
import {
  Box,
  Grid,
  Typography,
  Sheet,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from "@mui/joy";

import "./Sidebar.css";

import Logo from "../../../assets/icons/logo_200px_primary.svg";
import DashboardIcon from "../../../assets/icons/dashboard_128.png";
import RecipeIcon from "../../../assets/icons/recipe_128.png";
import AchievementIcon from "../../../assets/icons/achievement_128.png";
import ClockIcon from "../../../assets/icons/back-in-time_128.png";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  return (
    <nav id="dashboard-nav">
      <Sheet color="primary" variant="plain" sx={{ height: "100%" }}>
        <header>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
            padding={2}
            borderBottom={"none"}
          >
            <img
              src={Logo}
              alt="Logo"
              width={40}
              height={"auto"}
              style={{ aspectRatio: 1 }}
            />
            <Typography level="h1" color="primary" fontSize={20}>
              NutriTracker
            </Typography>
          </Box>
        </header>

        <Box pt={10} height={"100%"}>
          <Typography
            color="neutral"
            pl={"32px"}
            pt={"16px"}
            pb={"16px"}
            fontWeight="md"
          >
            MENÜ
          </Typography>
          <List sx={{ padding: 2 }}>
            <ListItem
              sx={{
                padding: 2,
                borderBottom: "none",
              }}
            >
              <ListItemButton
                sx={{
                  gap: 2,
                  padding: 2,
                  borderRadius: "sm",
                  fontWeight: "bold",
                }}
              >
                <img
                  src={DashboardIcon}
                  alt="dashboard-menu-icon"
                  width={24}
                  height={24}
                />
                <Typography level="body-md">Áttekintés</Typography>
                <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                padding: 2,
                borderBottom: "none",
              }}
            >
              <ListItemButton sx={{ gap: 2, padding: 2, borderRadius: "sm" }}>
                <img
                  src={RecipeIcon}
                  alt="dashboard-menu-icon"
                  width={24}
                  height={24}
                />
                <Typography level="body-md">Receptek</Typography>
                <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                padding: 2,
                borderBottom: "none",
              }}
            >
              <ListItemButton sx={{ gap: 2, padding: 2, borderRadius: "sm" }}>
                <img
                  src={AchievementIcon}
                  alt="dashboard-menu-icon"
                  width={24}
                  height={24}
                />
                <Typography level="body-md">Eredmények</Typography>
                <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                padding: 2,
                borderBottom: "none",
              }}
            >
              <ListItemButton sx={{ gap: 2, padding: 2, borderRadius: "sm" }}>
                <img
                  src={ClockIcon}
                  alt="dashboard-menu-icon"
                  width={24}
                  height={24}
                />
                <Typography level="body-md">Diéta történet</Typography>
                <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </nav>
  );
};

export default Sidebar;
