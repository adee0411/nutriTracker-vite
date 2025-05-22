import React from "react";
import { Box, Typography, Stack } from "@mui/joy";
import CustomProgress from "./CustomProgress";

const calorieGoalLineStyle = {
  width: "110%",
  height: "0.5px",
  background: "rgba(119, 119, 119, 0.6)",
  position: "absolute",
  top: "calc(20% + 2px)",
  left: "-5%",
  transform: "translateY(-50%)",
};

const PrevCalories = ({ calData }) => {
  const average = (
    calData.reduce((acc, data) => {
      let correctedValue = data.value;
      if (data.value === 0) correctedValue = 2000;
      return (acc += correctedValue);
    }, 0) / 7
  ).toFixed(0);

  const goal = 2000;

  const barMaxValue = goal + 500;

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      gap={1}
      width="80%"
      marginInline="auto"
    >
      <Stack
        direction="row"
        width="100%"
        height="100%"
        justifyContent="space-between"
        position="relative"
      >
        <div style={calorieGoalLineStyle}></div>
        {calData.map((data, i) => {
          return (
            <CustomProgress
              key={i}
              value={data.value}
              date={data.date}
              barMaxValue={barMaxValue}
            />
          );
        })}
      </Stack>
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Typography color="neutral" textAlign="center" level="body-sm">
          Cél: {goal} kcal
        </Typography>
        <Typography color="neutral" textAlign="center" level="body-sm">
          Átlag: {average} kcal
        </Typography>
      </Stack>
    </Box>
  );
};

export default PrevCalories;
