// Joy UI Components
import { Switch, switchClasses } from "@mui/joy";

// React icons
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

const ThemeToggle = () => {
  return (
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
  );
};

export default ThemeToggle;
