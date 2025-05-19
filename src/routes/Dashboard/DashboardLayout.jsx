import {
  Grid,
  Sheet,
  Switch,
  Avatar,
  Typography,
  Stack,
  Dropdown,
  Menu,
  MenuItem,
  MenuButton,
} from "@mui/joy";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import AvatarImg from "../../assets/images/avatar.jpg";
import { switchClasses } from "@mui/joy/Switch";
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import GoldBadge from "../../assets/icons/gold-medal_128.png";
import BlueBadge from "../../assets/icons/blue-medal_128.png";
import PurpleBadge from "../../assets/icons/purple-medal_128.png";

const DashboardLayout = () => {
  return (
    <Grid container columns={12}>
      <Sidebar />
      <Grid lg={10} md={10} xs={10}>
        <header
          style={{
            height: "100px",
            width: "calc(100% / 12 * 10)",
            position: "fixed",
            top: 0,
            borderRightStyle: 0,
            zIndex: 100,
          }}
        >
          <Sheet
            sx={{
              width: "100%",
              height: "100%",
              borderBottom: "1px solid var(--joy-palette-neutral-200)",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 6,
              padding: "20px 32px",
            }}
          >
            <Dropdown>
              <MenuButton variant="plain" color="neutral">
                Eredményeim: 5 <RiArrowDropDownFill fontSize={32} />
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
            <Avatar size="lg" src={AvatarImg}></Avatar>
          </Sheet>
        </header>
        <main
          style={{ height: "100vh", paddingTop: "100px", overflowY: "auto" }}
        >
          <Sheet
            color="neutral"
            variant="plain"
            sx={{ height: "100%", padding: 4 }}
          >
            <Outlet />
          </Sheet>
        </main>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
