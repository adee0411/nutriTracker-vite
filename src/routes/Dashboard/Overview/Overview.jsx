import { Box, Stack, Typography } from "@mui/joy";

import "./Overview.css";

import Calendar from "./Calendar/Calendar";
import DailyCalorieData from "./Charts/DailyData/DailyCalorieData/DailyCalorieData";
import LastSevenDaysData from "./Charts/SevenDayData/LastSevenDaysCard";

import LogNewData from "./LogNewData/LogNewData";
import DailyMacroCard from "./Charts/DailyData/DailyMacroData/DailyMacroCard";
import DailyWeightCard from "./Charts/DailyData/DailyWeightData/DailyWeightCard";
import DailyStepsCard from "./Charts/DailyData/DailyStepsData/DailyStepsCard";
import LogIngredient from "./LogIngredient/LogIngredient";
import LoggedIngredient from "./LoggedIngredient/LoggedIngredient";
import LastActivity from "./LastActivity/LastActivity";
import { useParams } from "react-router";

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
  // const [isActive, setIsActive] = useState(true);
  const params = useParams();
  const selectedDate = params.selectedDate;
  const date = selectedDate ? new Date(selectedDate) : new Date();
  const formattedDate = selectedDate.split("-").slice(1).join(".") + ".";

  return (
    <Box className="main-grid">
      {/*** Main visual content and data ***/}
      <Box className="data-content">
        {/** Dashboard header */}
        <Stack
          component="header"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography level="h1" fontSize={26} fontWeight={700}>
            Áttekintés ({formattedDate})
          </Typography>
          <LogNewData />
        </Stack>

        {/*** Overview charts ***/}
        <Box className="data-content__charts">
          <DailyCalorieData />
          <DailyMacroCard />
          <DailyWeightCard />
          <DailyStepsCard />
          <LastSevenDaysData />
        </Box>

        {/*** Meal logging and tracking ***/}

        <Box className="ingredient-log">
          <Box className="ingredient-log__add-ingredient">
            <Typography
              level="h2"
              mb={4}
              fontSize={20}
              color="neutral"
              fontWeight={400}
            >
              Alapanyag naplózása
            </Typography>
            <LogIngredient />
          </Box>
          <Box className="ingredient-log__logged-ingredient">
            <Typography
              level="h2"
              mb={4}
              fontSize={20}
              color="neutral"
              fontWeight={400}
            >
              Naplózott alapanyagok
            </Typography>
            <LoggedIngredient />
          </Box>
        </Box>
      </Box>
      <Stack gap={4}>
        <Calendar />
        <LastActivity />
      </Stack>
    </Box>
  );
};

export default Overview;
