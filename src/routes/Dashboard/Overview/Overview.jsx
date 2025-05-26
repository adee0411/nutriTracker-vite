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
import PrevCalories from "./PrevCalories";
import MealDetails from "./LoggedFoods/MealDetails";
import SearchForm from "./SearchIngredient/SearchForm";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import QuickIngredientTab from "./SearchIngredient/QuickSearch/QuickIngredientTab";

const TEST_CAL_DATA = [
  { date: "05.20.", value: 1890 },
  { date: "05.21.", value: 2007 },
  { date: "05.22.", value: 2100 },
  { date: "05.23.", value: 3234 },
  { date: "05.24.", value: 0 },
  { date: "05.25.", value: 2134 },
  { date: "05.26.", value: 1215 },
];

const Overview = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        width: "100%",
        height: "100%",
        gap: 4,
        p: 2,
      }}
    >
      <Box>
        <Typography
          level="h1"
          color="neutral"
          fontSize={20}
          mb={2}
          fontWeight={500}
        >
          Áttekintés (05. 20.)
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "200px",
            width: "100%",
            gap: 2,
            "& > *": {
              height: "inherit",
              overflow: "hidden",
            },
            mb: 2,
          }}
        >
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
            }}
            color="neutral"
            variant="plain"
          >
            <Typography level="title-sm" color="neutral">
              Napi tápanyag-bevitel
            </Typography>
            <CalorieGoalDetails current={2000} goal={3000} />
          </Card>{" "}
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
            }}
            variant="plain"
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography level="title-sm" color="neutral">
                Elmúlt 7 nap
              </Typography>
              <ButtonGroup
                variant="plain"
                color="neutral"
                size="sm"
                spacing={2}
              >
                <Button>
                  <IoIosArrowBack />
                </Button>
                <Button>
                  <IoIosArrowForward />
                </Button>
              </ButtonGroup>
            </Stack>

            <PrevCalories calData={TEST_CAL_DATA} />
          </Card>{" "}
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
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 2,
          }}
        >
          <Box sx={{ gridColumn: "1 / 8" }}>
            <Typography>Alapanyag keresése</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                height: "100%",
              }}
            >
              <SearchForm />
              <Box>
                <Typography>Kiválasztott alapanyag</Typography>
              </Box>
              <QuickIngredientTab />
            </Box>
          </Box>
          <Stack sx={{ gridColumn: "-1 / 8" }}>
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
                    textAlign: "center",
                  },
                }}
                tabFlex={1}
              >
                <Tab disableIndicator>Reggeli</Tab>
                <Tab disableIndicator>2. étkezés</Tab>
                <Tab disableIndicator>3. étkezés</Tab>
                <Tab disableIndicator>4. étkezés</Tab>
                <Tab disableIndicator>Nasi</Tab>
              </TabList>
            </Tabs>
            {/** FOOD LOGGING AND FOOD SEARCH */}
            <MealDetails />
          </Stack>
        </Box>
      </Box>

      <Calendar />
    </Box>
  );
};

export default Overview;
