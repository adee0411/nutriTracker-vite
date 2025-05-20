import React, { useState } from "react";
import "./customCalendarStyles.css";
import { Calendar as ReactCalendar } from "react-calendar";
import { Card } from "@mui/joy";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Card variant="plain" sx={{ boxShadow: "md" }}>
      <div className="calendar-container">
        <ReactCalendar />
      </div>
    </Card>
  );
};

export default Calendar;
