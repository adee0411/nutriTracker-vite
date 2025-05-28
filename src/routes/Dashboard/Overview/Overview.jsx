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
} from "@mui/joy";
import CalorieGoalDetails from "./CalorieGoalDetails";
import Calendar from "./Calendar/Calendar";
import PrevCalories from "./Charts/PrevCalories";
import MealDetails from "./LoggedFoods/MealDetails";
import SearchForm from "./SearchIngredient/SearchForm";
import CurrentDayCalories from "./Charts/CurrentDayCalories";

import "./Overview.css";

import QuickIngredientTab from "./SearchIngredient/QuickSearch/QuickIngredientTab";
import MUICalendar from "./Calendar/MUICalendar";
import LastSevenDaysData from "./Charts/LastSevenDaysData";

const Overview = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Box className="main-grid">
      {/*** Main visual content and data ***/}
      <Box className="visual-cont">
        <Typography
          level="h1"
          color="neutral"
          fontSize={20}
          mb={2}
          fontWeight={500}
        >
          Áttekintés (05. 20.)
        </Typography>
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
                  Alapanyag keresése
                </Tab>
                <Tab disableIndicator sx={{ textAlign: "center" }}>
                  Gyors elérés
                </Tab>
              </TabList>
            </Tabs>
            {/*               <SearchForm />
              <Box>
                <Typography>Kiválasztott alapanyag</Typography>
              </Box>
              <QuickIngredientTab /> */}
          </Box>
          <Box className="food-log__logged-food">
            {/**
             * 
             *             <Tabs
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
             */}

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
