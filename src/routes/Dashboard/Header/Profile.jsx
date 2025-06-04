import { Avatar, ListItemDecorator, MenuButton } from "@mui/joy";
// Assets
import AvatarImg from "../../../assets/images/avatar.jpg";
import React, { useState } from "react";
import { Button, Menu, MenuItem, Dropdown } from "@mui/joy";

import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router";

const Profile = () => {
  return (
    <Dropdown>
      <MenuButton
        sx={{ minWidth: 0, borderRadius: "50%", p: 0 }}
        variant="plain"
      >
        <Avatar size="md" src={AvatarImg} sx={{ cursor: "pointer" }} />
      </MenuButton>
      <Menu placement="bottom-end">
        <Link to="/dashboard/settings">
          {" "}
          <MenuItem>
            <ListItemDecorator>
              <CiSettings />
            </ListItemDecorator>
            Beállítások
          </MenuItem>
        </Link>

        <MenuItem>
          <ListItemDecorator>
            <IoIosLogOut />
          </ListItemDecorator>
          Kijelentkezés
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default Profile;
