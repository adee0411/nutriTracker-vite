import React from "react";
import { Box, Typography, Stack } from "@mui/joy";
import CustomProgress from "./CustomProgress";

const PrevCalories = ({ calData }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      {calData.map((data) => {
        return (
          <Stack key={data.date} alignItems="center" gap={1}>
            <CustomProgress data={data.value} />
            <Typography level="body-sm">{data.date}</Typography>
          </Stack>
        );
      })}
    </Box>
  );
};

export default PrevCalories;
