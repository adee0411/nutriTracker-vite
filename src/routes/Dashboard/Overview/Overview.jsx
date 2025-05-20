import { Card, Grid, Box, Stack, Typography, LinearProgress } from "@mui/joy";
import CalorieGoalDetails from "./CalorieGoalDetails";
import Calendar from "./Calendar/Calendar";

import PrevCalories from "./PrevCalories";

const TEST_CAL_DATA = [
  { date: "05.20.", value: 98 },
  { date: "05.21.", value: 77 },
  { date: "05.22.", value: 110 },
  { date: "05.23.", value: 98 },
  { date: "05.24.", value: null },
  { date: "05.25.", value: 32 },
  { date: "05.26.", value: 60 },
];

const Overview = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        width: "100%",
        height: "100%",
        gap: 2,
      }}
    >
      <Box>
        <Typography level="h2" color="neutral" fontSize={20} mb={2}>
          Áttekintés
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            width: "100%",
            gap: 2,
          }}
        >
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
            }}
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
            <Typography level="title-sm" color="neutral">
              Elmúlt 7 napi kalória
            </Typography>
            <PrevCalories calData={TEST_CAL_DATA} />
          </Card>{" "}
        </Box>
      </Box>

      <Calendar />
    </Box>
  );
};

export default Overview;
