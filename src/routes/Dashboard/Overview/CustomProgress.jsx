import React from "react";
import "./customProgress.css";
import { Tooltip } from "@mui/joy";

const CustomProgress = ({ data }) => {
  // Prevent fill value to overflow
  let correctedData = data ?? 0;
  if (data > 100) {
    correctedData = 100;
  }
  if (data < 0) {
    correctedData = 0;
  }
  return (
    <Tooltip title={`${data} kcal`}>
      <div
        className="progress-track"
        style={{ "--fillValue": `${correctedData}%` }}
      >
        <div className="progress-fill"></div>
      </div>
    </Tooltip>
  );
};

export default CustomProgress;
