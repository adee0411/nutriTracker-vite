import React from "react";
import "./customProgress.css";
import { Tooltip } from "@mui/joy";

const CustomProgress = ({ date, value, barMaxValue }) => {
  let ratio = (value / barMaxValue) * 100;
  const goal = 2000;

  // Prevent fill value to overflow
  if (ratio > 100) {
    ratio = 100;
  }
  if (ratio === 0) {
    ratio = 0;
  }

  const fillColor = value >= goal ? "#E47474" : "#0b6bcb";
  return (
    <Tooltip
      title={` ${date}: ${value === 0 ? "nincs adat" : `${value} kcal`} `}
      size="sm"
      sx={{
        fontWeight: 200,
      }}
    >
      <div
        className="progress-track"
        style={{ "--fillValue": `${ratio}%`, "--fillColor": `${fillColor}` }}
      >
        <div className="progress-fill"></div>
      </div>
    </Tooltip>
  );
};

export default CustomProgress;
