import React, { useEffect, useState } from "react";
import "./customCalendarStyles.css";
import { Calendar as ReactCalendar } from "react-calendar";
import { Card } from "@mui/joy";
import { useNavigate, useParams } from "react-router";

const Calendar = () => {
  const initialDate = useParams().selectedDate;
  const [selectedDate, setSelectedDate] = useState(new Date(initialDate));
  const navigate = useNavigate();

  const handleDateChange = (value, event) => {
    setSelectedDate(value);
  };

  useEffect(() => {
    const formattedDate = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
    navigate(`/dashboard/${formattedDate}`);
  }, [selectedDate, navigate]);

  return (
    <Card variant="plain" sx={{ boxShadow: "md" }}>
      <div className="calendar-container">
        <ReactCalendar
          onChange={handleDateChange}
          value={selectedDate}
          maxDate={new Date()}
        />
      </div>
    </Card>
  );
};

export default Calendar;
