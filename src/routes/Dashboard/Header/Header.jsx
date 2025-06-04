//  JoyUI Components
import { Sheet, Typography, Stack } from "@mui/joy";

//  Custom CSS styles
import "./Header.css";

//  Components
import Achievements from "./Achievements";
import ThemeToggle from "./ThemeToggle";

// React Icons
import { LiaBurnSolid } from "react-icons/lia";
import { IoFootstepsOutline } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="dashboard-header">
      <Sheet className="header-content" color="primary" variant="plain">
        <Stack direction={"row"} spacing={2} alignItems="center">
          <Typography level="title-md">Céljaim:</Typography>
          <Stack direction="row" spacing={4}>
            <Stack direction="row" spacing={1} alignItems={"center"}>
              <Typography fontSize={16}>
                {" "}
                <LiaBurnSolid />
              </Typography>

              <Typography fontSize={14}>3000 kcal</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography fontSize={16}>
                <IoFootstepsOutline />
              </Typography>
              <Typography fontSize={14}>10.000</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Typography fontSize={16}>
                <IoScaleOutline />
              </Typography>
              <Typography fontSize={14}>90kg</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Achievements />
        <ThemeToggle />
        <Profile />
      </Sheet>
    </header>
  );
};

export default Header;
