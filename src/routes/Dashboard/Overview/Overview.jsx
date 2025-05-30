import { useState } from "react";
import {
  Card,
  CardOverflow,
  AspectRatio,
  CardContent,
  Divider,
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
  Tooltip,
  Sheet,
  Link,
} from "@mui/joy";

import "./Overview.css";

import Calendar from "./Calendar/Calendar";
import MealDetails from "./LoggedFoods/MealDetails";
import CurrentDayCalories from "./Charts/CurrentDayCalories";
import LastSevenDaysData from "./Charts/LastSevenDaysData";
import SearchForm from "../Overview/SearchIngredient/SearchForm";
import ResultList from "../Overview/SearchIngredient/ResultList";
import QuickIngredientTab from "../Overview/SearchIngredient/QuickSearch/QuickIngredientTab";
import SelectedIngredient from "./SearchIngredient/SelectedIngredient";

import { IoAdd } from "react-icons/io5";
import { IoScaleOutline } from "react-icons/io5";
import { IoFootstepsOutline } from "react-icons/io5";
import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";

import RoutePlacehorderImg from "../../../assets/images/route_placeholder.jpg";

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
          <Typography level="h1" fontSize={26} fontWeight={700}>
            Áttekintés (05. 20.)
          </Typography>
          <Dropdown>
            <Tooltip
              title="Naplóz"
              size="md"
              sx={{ fontWeight: "200" }}
              placement="bottom-end"
            >
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

            <Menu placement="bottom-end" sx={{ p: 0 }} size="sm">
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

        {/*** Overview charts ***/}
        <Box className="visual-cont__charts">
          <CurrentDayCalories />
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
              gridColumn: "span 2",
              border: "none",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography level="title-md" component="h2" color="neutral">
                Testsúly
              </Typography>
              <Sheet
                color="primary"
                variant="soft"
                sx={{ p: 1, borderRadius: "md" }}
              >
                <Typography component="span" color="neutral" fontSize={22}>
                  {" "}
                  <IoScaleOutline />
                </Typography>
              </Sheet>
            </Stack>
            <Stack
              height="100%"
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <Typography fontSize={40} fontWeight={600}>
                104 kg
              </Typography>
            </Stack>
          </Card>
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
              gridColumn: "span 2",
              border: "none",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography level="title-md" component="h2" color="neutral">
                Lépésszám
              </Typography>
              <Sheet
                color="warning"
                variant="soft"
                sx={{ p: 1, borderRadius: "md" }}
              >
                <Typography component="span" color="neutral" fontSize={22}>
                  {" "}
                  <IoFootstepsOutline />
                </Typography>
              </Sheet>
            </Stack>
            <Stack
              height="100%"
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography fontSize={40} fontWeight={600}>
                8972
              </Typography>
            </Stack>
          </Card>
          <LastSevenDaysData />
        </Box>
        {/*** Meal logging and tracking ***/}
        <Box className="food-log">
          <Box className="food-log__add-food">
            <Tabs
              variant="outlined"
              aria-label="Ingredient search"
              defaultValue="search"
              sx={{
                borderRadius: "lg",
                boxShadow: "sm",
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
                  <Box py={4}>
                    <SearchForm />
                  </Box>
                  <Box p={4}>
                    <SelectedIngredient />
                  </Box>
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
      <Stack className="aside" gap={4}>
        <Calendar />
        <Card variant="outlined" sx={{ "&:hover img": { scale: 1.2 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography level="title-sm">Utolsó aktivitás</Typography>
            <Link color="neutral" level="body-sm">
              Összes
            </Link>
          </Stack>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src={RoutePlacehorderImg}
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
                style={{ transition: "all .3s ease" }}
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Stack direction="row" alignItems="center" gap={1}>
              <IoIosBicycle />
              <Typography level="title-md">Bicikli</Typography>
            </Stack>
            <Typography level="body-sm">Budapest</Typography>
            <Typography level="body-sm" fontSize={12}>
              2025.05.30.
            </Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Stack direction="row" alignItems="center" gap={1} flex={1}>
                <CiClock1 />
                <Typography
                  level="body-xs"
                  textColor="text.secondary"
                  sx={{ fontWeight: "md" }}
                >
                  Idő: 1:02:13
                </Typography>
              </Stack>

              <Divider orientation="vertical" />
              <Stack direction="row" alignItems="center" gap={1} flex={1}>
                <GiPathDistance />
                <Typography
                  level="body-xs"
                  textColor="text.secondary"
                  sx={{ fontWeight: "md" }}
                  flex={1}
                >
                  Táv: 19.83 km
                </Typography>
              </Stack>
            </CardContent>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
};

export default Overview;
