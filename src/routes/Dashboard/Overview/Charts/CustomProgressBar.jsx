import React from "react";
import "./customProgressBar.css";
import { Tooltip } from "@mui/joy";

const CustomProgressBar = ({
  date,
  value,
  barMaxValue,
  goal,
  unit,
  fillType,
}) => {
  let ratio = (value / barMaxValue) * 100;

  // Prevent fill value to overflow
  if (ratio > 100) {
    ratio = 100;
  }
  if (ratio === 0) {
    ratio = 0;
  }

  const successColor = fillType === "normal" ? "#EA9A3E" : "#0b6bcb";
  const failColor = fillType === "normal" ? "#0b6bcb" : "#EA9A3E";

  const fillColor = value >= goal ? successColor : failColor;

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
