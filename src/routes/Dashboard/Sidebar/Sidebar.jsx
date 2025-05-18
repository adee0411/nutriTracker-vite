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
import Logo from "../../../assets/icons/logo_200px_primary.svg";
import DashboardIcon from "../../../assets/icons/dashboard_128.png";
import RecipeIcon from "../../../assets/icons/recipe_128.png";
import AchievementIcon from "../../../assets/icons/achievement_128.png";
import ClockIcon from "../../../assets/icons/back-in-time_128.png";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  return (
    <Grid md={2} sm={4} xs={12} height={"100vh"} overflow={"hidden"}>
      <Sheet
        sx={{
          width: "100%",
          height: "100%",
          background: "transparent",
          borderRight: "none",
        }}
      >
        <header style={{ height: "100px" }}>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems="center"
            padding={2}
            height={"100%"}
            borderBottom={"none"}
          >
            <img
              src={Logo}
              alt="Logo"
              width={40}
              height={"auto"}
              style={{ aspectRatio: 1 }}
            />
            <Typography
              level="title-md"
              color="primary"
              fontWeight="bold"
              fontSize={24}
            >
              NutriTracker
            </Typography>
          </Box>
        </header>

        <Box pt={10}>
          <Typography
            color="neutral"
            pl={"32px"}
            pt={"16px"}
            pb={"16px"}
            fontWeight="md"
          >
            MENU
          </Typography>
          <List sx={{ padding: 2 }}>
            <ListItem
              sx={{
                padding: 2,
                borderBottom: "none",
              }}
            >
              <ListItemButton sx={{ gap: 2, padding: 2, borderRadius: "sm" }}>
                <img
                  src={DashboardIcon}
                  alt="dashboard-menu-icon"
                  width={24}
                  height={24}
                />
                <Typography level="body-md">Dashboard</Typography>
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
                <Typography level="body-md">Recipes</Typography>
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
                <Typography level="body-md">Achievements</Typography>
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
                <Typography level="body-md">Diet history</Typography>
                <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Sheet>
    </Grid>
  );
};

export default Sidebar;
