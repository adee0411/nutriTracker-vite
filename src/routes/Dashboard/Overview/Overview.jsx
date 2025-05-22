import { Card, Grid, Box, Stack, Typography, LinearProgress } from "@mui/joy";
import CalorieGoalDetails from "./CalorieGoalDetails";
import Calendar from "./Calendar/Calendar";

import PrevCalories from "./PrevCalories";

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
        <Typography level="h2" color="neutral" fontSize={20} mb={2}>
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
          }}
        >
          <Card
            sx={{
              boxShadow: "md",
              flex: 1,
              p: 2,
            }}
            color="primary"
            variant="soft"
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
              Elmúlt 7 nap
            </Typography>
            <PrevCalories calData={TEST_CAL_DATA} />
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
              Valami csuszpajsz
            </Typography>
          </Card>{" "}
        </Box>
        <Box height="calc(100% - 250px)">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              width: "100%",
              gap: 4,
            }}
          ></Box>
        </Box>
      </Box>

      <Calendar />
    </Box>
  );
};

export default Overview;
