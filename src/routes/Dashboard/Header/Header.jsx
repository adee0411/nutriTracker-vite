import {
  Sheet,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
  Typography,
  Switch,
  Avatar,
} from "@mui/joy";
import { switchClasses } from "@mui/joy/Switch";

import "./Header.css";

import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import AvatarImg from "../../../assets/images/avatar.jpg";
import GoldBadge from "../../../assets/icons/gold-medal_128.png";
import BlueBadge from "../../../assets/icons/blue-medal_128.png";
import PurpleBadge from "../../../assets/icons/purple-medal_128.png";

const Header = () => {
  return (
    <header className="dashboard-header">
      <Sheet
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 6,
          p: "0 32px",
        }}
        color="primary"
        variant="plain"
      >
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
            <MenuItem
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                borderRadius: "sm",
              }}
            >
              <img
                src={GoldBadge}
                alt="badge"
                style={{ width: 50, height: 50 }}
              />
              <Typography level="body-sm" color="neutral">
                - 5kg
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                borderRadius: "sm",
              }}
            >
              <img
                src={BlueBadge}
                alt="badge"
                style={{ width: 50, height: 50 }}
              />
              <Typography level="body-sm" color="neutral">
                5 day protein goal
              </Typography>
            </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                borderRadius: "sm",
              }}
            >
              <img
                src={PurpleBadge}
                alt="badge"
                style={{ width: 50, height: 50 }}
              />
              <Typography level="body-sm" color="neutral">
                7 day in a row
              </Typography>
            </MenuItem>
          </Menu>
        </Dropdown>
        <Switch
          sx={() => {
            return {
              WebkitTapHighlightColor: "transparent",
              [`& .${switchClasses.thumb}`]: {
                transition: "width 0.2s, left 0.2s",
              },
            };
          }}
          size="lg"
          slotProps={{
            input: { "aria-label": "dark mode" },
          }}
          startDecorator={<IoSunnyOutline />}
          endDecorator={<GoMoon />}
          color="primary"
          variant="soft"
        />
        <Avatar size="md" src={AvatarImg}></Avatar>
      </Sheet>
    </header>
  );
};

export default Header;
