import React from "react";
import { Box, Typography, Stack } from "@mui/joy";

import CustomBarChart from "../CustomBarChart";

const TEST_CAL_DATA = [
  { date: "05.20.", value: 1890 },
  { date: "05.21.", value: 2007 },
  { date: "05.22.", value: 2100 },
  { date: "05.23.", value: 3234 },
  { date: "05.24.", value: 0 },
  { date: "05.25.", value: 2134 },
  { date: "05.26.", value: 1215 },
];

const PrevCalories = () => {
  const goal = 2000;

  return (
    <CustomBarChart
      data={TEST_CAL_DATA}
      goal={goal}
      unit="kcal"
      fillType="normal"
    />
  );
};

export default PrevCalories;
