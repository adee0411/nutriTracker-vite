import React, { useState } from "react";
import { Typography, Box, Button, Stack } from "@mui/joy";

import FeatureLayout from "./FeatureLayout";

import ImageMan from "../../../assets/images/Diet-bro.svg";
import ImageWoman from "../../../assets/images/Diet-sis.svg";

import LogImage from "../../../assets/images/healthy food-amico.svg";
import TrackImage from "../../../assets/images/analytics-bro.svg";
import EditImage from "../../../assets/images/Setup-rafiki.svg";

const FEATURES = [
  {
    title: "Log meals and track nutritions",
    description:
      "Search for ingredients you take in and log them in your meals - so you can track your macros and adjust them to your goals.",
    image: LogImage,
  },
  {
    title: "Add custom ingredients or meals",
    description:
      "If you can't find the ingredient you're looking for, don't worry! You can create custom ingredients and meals. ",
    image: EditImage,
  },
  {
    title: "Set diet goals and track your progress",
    description:
      "If you have plans to change your look, set your diet goals and achieve them together! You can track your progress, get useful hints and feedbacks.",
    image: TrackImage,
  },
];

const Welcome = ({ gender }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [renderFeatures, setRenderFeatures] = useState(false);

  const handleNextFeature = () => {
    setCurrentFeature(currentFeature + 1);
  };

  const handleRenderFeatures = () => {
    setRenderFeatures(true);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          gap: 6,
        }}
      >
        {renderFeatures ? (
          <FeatureLayout currentFeature={currentFeature} features={FEATURES} />
        ) : (
          <>
            <Box sx={{ width: "40%", textAlign: "center" }}>
              <Typography
                level="title-lg"
                fontSize={30}
                fontWeight={200}
                mb={2}
              >
                Hi <Typography fontWeight={400}>Adam</Typography>, Welcome to{" "}
                <Typography color="primary" fontWeight={400}>
                  NutriTracker
                </Typography>
                !
              </Typography>
              <Typography fontSize={20} fontWeight={200} mt={2}>
                We’re excited to have you on board! Your journey to better
                nutrition starts here. Track your meals, set goals, and gain
                insights to fuel a healthier lifestyle — one bite at a time.
                Let’s get started! 💪
              </Typography>
            </Box>

            <img
              src={gender === "femmale" ? ImageWoman : ImageMan}
              alt="illustration"
              style={{ width: "20%", height: "auto", marginTop: "20px" }}
            />
          </>
        )}
        <Stack direction="row" gap={10} width="100%" justifyContent="center">
          <Button variant="outlined" fullWidth sx={{ maxWidth: 250 }}>
            Let's get started now
          </Button>
          {!renderFeatures ? (
            <Button
              fullWidth
              sx={{ maxWidth: 250 }}
              onClick={handleRenderFeatures}
            >
              Explore features
            </Button>
          ) : (
            ""
          )}
          {renderFeatures && currentFeature !== FEATURES.length - 1 ? (
            <Button
              fullWidth
              sx={{ maxWidth: 250 }}
              onClick={handleNextFeature}
            >
              Next
            </Button>
          ) : (
            <Button
              fullWidth
              sx={{ maxWidth: 250 }}
              onClick={handleNextFeature}
            >
              Got it!
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Welcome;
