import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  tabClasses,
  Tooltip,
  Stack,
  Box,
} from "@mui/joy";
import SearchForm from "./SearchIngredient/SearchForm";
import SelectedIngredient from "./SearchIngredient/SelectedIngredient";

import { FaRegHeart } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { IoRepeat } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import RecentIngredients from "./QuickIngredient/RecentIngredients";
import FavoriteIngredients from "./QuickIngredient/FavoriteIngredients";
import FrequentIngredients from "./QuickIngredient/FrequentIngredients";
import CustomIngredients from "./QuickIngredient/CustomIngredients";
import SearchIngredient from "./SearchIngredient/SearchIngredient";

const LogIngredient = () => {
  return (
    <Tabs
      variant="outlined"
      aria-label="Ingredient search"
      defaultValue="search"
      sx={{
        borderRadius: "md",
        boxShadow: "md",
        overflow: "auto",
      }}
    >
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          [`& .${tabClasses.root}`]: {
            fontSize: "sm",
            fontWeight: "lg",
            [`&[aria-selected="true"]`]: {
              color: "primary.500",
              bgcolor: "background.surface",
            },
            [`&.${tabClasses.focusVisible}`]: {
              outlineOffset: "-4px",
            },
          },
        }}
      >
        <Tooltip title="Keresés" size="sm">
          <Tab disableIndicator value="search" variant="soft">
            <CiSearch />
          </Tab>
        </Tooltip>

        <Tooltip title="Legutóbbiak" size="sm">
          <Tab disableIndicator variant="soft" value="recent">
            <LuClock />
          </Tab>
        </Tooltip>
        <Tooltip title="Kedvencek" size="sm">
          <Tab disableIndicator variant="soft" value="favorite">
            <FaRegHeart />
          </Tab>
        </Tooltip>
        <Tooltip title="Gyakoriak" size="sm">
          <Tab disableIndicator variant="soft" value="frequent">
            <IoRepeat />
          </Tab>
        </Tooltip>

        <Tooltip title="Saját" size="sm">
          <Tab disableIndicator variant="soft" value="custom">
            <FaRegUser />
          </Tab>
        </Tooltip>
      </TabList>

      <TabPanel value="search" sx={{ p: 2 }}>
        <SearchIngredient />
      </TabPanel>
      <TabPanel value="recent">
        <RecentIngredients />
      </TabPanel>
      <TabPanel value="favorite">
        <FavoriteIngredients />
      </TabPanel>
      <TabPanel value="frequent">
        <FrequentIngredients />
      </TabPanel>
      <TabPanel value="custom">
        <CustomIngredients />
      </TabPanel>
    </Tabs>
  );
};

export default LogIngredient;
