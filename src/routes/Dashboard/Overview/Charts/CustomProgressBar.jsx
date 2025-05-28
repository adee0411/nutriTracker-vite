import React from "react";
import "./customProgressBar.css";
import { Tooltip } from "@mui/joy";

const CustomProgressBar = ({ date, value, barMaxValue, goal, unit }) => {
  let ratio = (value / barMaxValue) * 100;

  // Prevent fill value to overflow
  if (ratio > 100) {
    ratio = 100;
  }
  if (ratio === 0) {
    ratio = 0;
  }

  const fillColor = value >= goal ? "#EA9A3E" : "#0b6bcb";
  return (
    <Tooltip
      title={` ${date}: ${value === 0 ? "nincs adat" : `${value} ${unit}`} `}
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

export default CustomProgressBar;
