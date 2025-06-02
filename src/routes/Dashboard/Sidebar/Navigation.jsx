// Joy UI components
import { Box, Typography, List, ListItem, ListItemButton } from "@mui/joy";

// Assets
import DashboardIcon from "../../../assets/icons/dashboard_128.png";
import RecipeIcon from "../../../assets/icons/recipe_128.png";
import AchievementIcon from "../../../assets/icons/achievement_128.png";
import ClockIcon from "../../../assets/icons/back-in-time_128.png";

// React icons
import { MdKeyboardArrowRight } from "react-icons/md";

// Menu item map
const menuItems = [
  {
    title: "Áttekintés",
    icon: DashboardIcon,
  },
  {
    title: "Receptek",
    icon: RecipeIcon,
  },
  {
    title: "Eredmények",
    icon: AchievementIcon,
  },
  {
    title: "Diéta történet",
    icon: ClockIcon,
  },
];

const Navigation = () => {
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
            <ListItem
              key={item.title}
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
          );
        })}
      </List>
    </Box>
  );
};

export default Navigation;
