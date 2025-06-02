// Joy UI components
import { Dropdown, MenuButton, Menu, MenuItem, Typography } from "@mui/joy";

// React Icons
import { RiArrowDropDownFill } from "react-icons/ri";

// Assets
import GoldBadge from "../../../assets/icons/gold-medal_128.png";
import BlueBadge from "../../../assets/icons/blue-medal_128.png";
import PurpleBadge from "../../../assets/icons/purple-medal_128.png";
import { useState } from "react";

const Achievements = () => {
  // Achievements state
  const [achievements, setAchievements] = useState([
    {
      title: "-5 kg",
      icon: GoldBadge,
    },
    {
      title: "5 nap protein cél",
      icon: BlueBadge,
    },
    {
      title: "10 napos naplózás",
      icon: PurpleBadge,
    },
  ]);
  return (
    <Dropdown>
      <MenuButton variant="plain" color="neutral">
        Eredményeim: 3 <RiArrowDropDownFill fontSize={32} />
      </MenuButton>
      <Menu
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(50px, 1fr))",
          padding: 2,
        }}
        placement="bottom-end"
      >
        {achievements.map((achievement) => {
          return (
            <MenuItem
              key={achievement.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                borderRadius: "sm",
              }}
            >
              <img
                src={achievement.icon}
                alt="badge"
                style={{ width: 50, height: 50 }}
              />
              <Typography level="body-sm" color="neutral">
                {achievement.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Dropdown>
  );
};

export default Achievements;
