import React, { useState } from "react";
import "./customCalendarStyles.css";
import { Calendar as ReactCalendar } from "react-calendar";
import { Card } from "@mui/joy";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (value, event) => {
    setSelectedDate(value);
  };
  return (
    <Card variant="plain" sx={{ boxShadow: "md" }}>
      <div className="calendar-container">
        <ReactCalendar onChange={handleDateChange} value={selectedDate} />
      </div>
    </Card>
  );
};

export default Calendar;
