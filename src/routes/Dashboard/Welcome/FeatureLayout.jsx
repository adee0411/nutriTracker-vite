import React from "react";
import { Box, Typography, Stack } from "@mui/joy";

import "./FeatureLayout.css";

const FeatureLayout = ({ currentFeature, features }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography level="title-lg" fontSize={30} fontWeight={200} mb={2}>
        {features[currentFeature].title}
      </Typography>
      <Typography fontSize={20} fontWeight={200} mt={2}>
        {features[currentFeature].description}
      </Typography>

      <div style={{ height: "100%" }}>
        <img
          src={features[currentFeature].image}
          alt="illustration"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <Stack direction="row" gap={1}>
        {Array(features.length)
          .fill(undefined)
          .map((el, i) => {
            return (
              <div
                className={`indicator ${
                  currentFeature === i ? "indicator--active" : ""
                }`}
              ></div>
            );
          })}
      </Stack>
    </Box>
  );
};

export default FeatureLayout;
