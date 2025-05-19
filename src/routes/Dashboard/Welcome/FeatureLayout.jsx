import React from "react";
import { Box, Typography } from "@mui/joy";

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

      <img
        src={features[currentFeature].image}
        alt="illustration"
        style={{ width: "50%", height: "auto" }}
      />
    </Box>
  );
};

export default FeatureLayout;
