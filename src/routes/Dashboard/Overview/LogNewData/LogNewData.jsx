// Joy UI components
import {
  Dropdown,
  Tooltip,
  MenuButton,
  Menu,
  MenuItem,
  ListItemDecorator,
  IconButton,
} from "@mui/joy";

// React Icons
import { IoAdd } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { IoFootstepsOutline } from "react-icons/io5";
import { IoIosBicycle } from "react-icons/io";

// Menu Items Map
const menuItems = [
  {
    title: "Súly",
    icon: <IoScaleOutline />,
  },
  {
    title: "Lépésszám",
    icon: <IoFootstepsOutline />,
  },
  {
    title: "Edzés",
    icon: <IoIosBicycle />,
  },
];

const LogNewData = () => {
  return (
    <Dropdown>
      <Tooltip title="Naplóz" size="sm" placement="bottom-end">
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{
            root: {
              variant: "solid",
              color: "primary",
              title: "Naplóz",
            },
          }}
          sx={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
          }}
        >
          <IoAdd />
        </MenuButton>
      </Tooltip>

      <Menu placement="bottom-end" sx={{ p: 0, minWidth: "170px" }} size="sm">
        {menuItems.map((item) => {
          return (
            <MenuItem key={item.title}>
              <ListItemDecorator>{item.icon}</ListItemDecorator>
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </Dropdown>
  );
};

export default LogNewData;
