// Joy UI components
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/joy";

// Assets
import DashboardIcon from "../../../assets/icons/dashboard_128.png";
import RecipeIcon from "../../../assets/icons/recipe_128.png";
import AchievementIcon from "../../../assets/icons/achievement_128.png";
import ClockIcon from "../../../assets/icons/back-in-time_128.png";
import ChartIcon from "../../../assets/icons/chart_128.png";

// React icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router";

import { useSelector } from "react-redux";

const Navigation = () => {
  const { selectedDate } = useSelector((state) => state.app.UI);
  // Menu item map
  const menuItems = [
    {
      title: "Áttekintés",
      icon: DashboardIcon,
      url: `/attekintes/${selectedDate}`,
    },
    {
      title: "Elemzések",
      icon: ChartIcon,
      url: "elemzesek",
    },
    {
      title: "Receptek",
      icon: RecipeIcon,
      url: "receptek",
    },
    {
      title: "Eredmények",
      icon: AchievementIcon,
      url: "eredmenyek",
    },
    {
      title: "Diéta történet",
      icon: ClockIcon,
      url: "dieta-tortenet",
    },
  ];

  return (
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
        {menuItems.map((item) => {
          return (
            <NavLink
              to={item.url}
              key={item.url}
              className={({ isActive, isPending }) => {
                return isPending
                  ? "menu-item--active"
                  : isActive
                  ? "menu-item--active"
                  : "";
              }}
            >
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
                  }}
                >
                  <img
                    src={item.icon}
                    alt="dashboard-menu-icon"
                    width={24}
                    height={24}
                  />
                  <Typography level="body-md">{item.title}</Typography>
                  <MdKeyboardArrowRight style={{ marginLeft: "auto" }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
