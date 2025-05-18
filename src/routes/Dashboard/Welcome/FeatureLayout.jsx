import React from "react";
import { Box, Typography, Stack, Button } from "@mui/joy";

const FeatureLayout = ({ currentFeature, features }) => {
  return (
    <>
      <Box sx={{ width: "40%", textAlign: "center" }}>
        <Typography level="title-lg" fontSize={30} fontWeight={200} mb={2}>
          {features[currentFeature].title}
        </Typography>
        <Typography fontSize={20} fontWeight={200} mt={2}>
          {features[currentFeature].description}
        </Typography>
      </Box>

      <img
        src={features[currentFeature].image}
        alt="illustration"
        style={{ width: "20%", height: "auto", marginTop: "20px" }}
      />
    </>
  );
};

export default FeatureLayout;
