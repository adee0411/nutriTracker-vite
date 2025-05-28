import { useState } from "react";
import {
  Card,
  Grid,
  Box,
  Stack,
  Typography,
  LinearProgress,
  ButtonGroup,
  Button,
  Tabs,
  TabList,
  Tab,
  tabClasses,
  Dropdown,
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  ListItemDecorator,
  TabPanel,
} from "@mui/joy";

import "./Overview.css";

import Calendar from "./Calendar/Calendar";
import MealDetails from "./LoggedFoods/MealDetails";
import CurrentDayCalories from "./Charts/CurrentDayCalories";
import LastSevenDaysData from "./Charts/LastSevenDaysData";
import SearchForm from "../Overview/SearchIngredient/SearchForm";
import ResultList from "../Overview/SearchIngredient/ResultList";
import QuickIngredientTab from "../Overview/SearchIngredient/QuickSearch/QuickIngredientTab";

import { IoAdd } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { IoFootstepsOutline } from "react-icons/io5";
import { IoIosBicycle } from "react-icons/io";
import SelectedIngredient from "./SearchIngredient/SelectedIngredient";

const TEST_RESULTS = [
  {
    id: "001",
    ingredientName: "csirkecsöcs",
    amount: 200,
    unit: "g",
    nutritionData: {
      protein: 20,
      carb: 1,
      fat: 0,
      energy: 80,
    },
  },
  {
    id: "002",
    ingredientName: "csirkecsöcs",
    amount: 200,
    unit: "g",
    nutritionData: {
      protein: 20,
      carb: 1,
      fat: 0,
      energy: 80,
    },
  },
  {
    id: "003",
    ingredientName: "csirkecsöcs",
    amount: 200,
    unit: "g",
    nutritionData: {
      protein: 20,
      carb: 1,
      fat: 0,
      energy: 80,
    },
  },
];

const Overview = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Box className="main-grid">
      {/*** Main visual content and data ***/}
      <Box className="visual-cont">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography level="h1" color="neutral" fontSize={20} fontWeight={500}>
            Áttekintés (05. 20.)
          </Typography>
          <Dropdown>
            <MenuButton
              variant="solid"
              color="primary"
              slots={{ root: IconButton }}
              slotProps={{
                root: {
                  variant: "outlined",
                  color: "neutral",
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
            <Menu placement="bottom-end" sx={{ p: 0 }}>
              <MenuItem>
                <ListItemDecorator>
                  <IoScaleOutline />
                </ListItemDecorator>
                Testsúly
              </MenuItem>
              <MenuItem>
                <ListItemDecorator>
                  <IoFootstepsOutline />
                </ListItemDecorator>
                Lépésszám
              </MenuItem>
              <MenuItem>
                <ListItemDecorator>
                  <IoIosBicycle />
                </ListItemDecorator>
                Edzés
              </MenuItem>
            </Menu>
          </Dropdown>
        </Stack>

        {/*** Overview header and charts ***/}
        <Box className="visual-cont__charts">
          <CurrentDayCalories />
          <LastSevenDaysData />
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
            }}
            variant="solid"
            color="primary"
            invertedColors
          >
            <Typography level="title-sm" color="neutral">
              Valami csuszpajsz
            </Typography>
          </Card>{" "}
        </Box>
        {/*** Meal logging and tracking ***/}
        <Box className="food-log">
          <Box className="food-log__add-food">
            <Tabs
              aria-label="ingredient-search-tabs"
              defaultValue="search"
              sx={{ bgcolor: "transparent", mb: 2 }}
              size="sm"
            >
              <TabList
                disableUnderline
                sx={{
                  p: 1,
                  gap: 4,
                  borderRadius: "xl",
                  bgcolor: "background.level1",
                  [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: "sm",
                    bgcolor: "background.surface",
                  },
                  "& > *": {
                    fontSize: 12,
                  },
                }}
                tabFlex={1}
              >
                <Tab
                  disableIndicator
                  sx={{ textAlign: "center" }}
                  value="search"
                >
                  Alapanyag keresése
                </Tab>
                <Tab
                  disableIndicator
                  sx={{ textAlign: "center" }}
                  value="quick"
                >
                  Gyors elérés
                </Tab>
              </TabList>
              <TabPanel value="search" sx={{ p: 0 }}>
                <Stack
                  direction="row"
                  width="100%"
                  sx={{ "& > *": { flex: 1 } }}
                  gap={4}
                >
                  <SearchForm />
                  <SelectedIngredient />
                </Stack>
              </TabPanel>
              <TabPanel value="quick" sx={{ p: 0 }}>
                <QuickIngredientTab />
              </TabPanel>
            </Tabs>
          </Box>
          <Box className="food-log__logged-food">
            <Tabs
              aria-label="tabs"
              defaultValue={0}
              sx={{ bgcolor: "transparent", mb: 2 }}
              size="sm"
            >
              <TabList
                disableUnderline
                sx={{
                  p: 1,
                  gap: 0.5,
                  borderRadius: "xl",
                  bgcolor: "background.level1",
                  [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: "sm",
                    bgcolor: "background.surface",
                  },
                  "& > *": {
                    fontSize: 12,
                  },
                }}
                tabFlex={1}
              >
                <Tab disableIndicator sx={{ textAlign: "center" }}>
                  Reggeli
                </Tab>
                <Tab disableIndicator sx={{ textAlign: "center" }}>
                  2. étkezés
                </Tab>
                <Tab disableIndicator sx={{ textAlign: "center" }}>
                  3. étkezés
                </Tab>
                <Tab disableIndicator sx={{ textAlign: "center" }}>
                  4. étkezés
                </Tab>
                <Tab disableIndicator sx={{ textAlign: "center" }}>
                  Nasi
                </Tab>
              </TabList>
            </Tabs>

            {/** FOOD LOGGING AND FOOD SEARCH */}
            <MealDetails />
          </Box>
        </Box>
      </Box>
      <Box className="aside">
        <Calendar />
      </Box>
    </Box>
  );
};

export default Overview;
