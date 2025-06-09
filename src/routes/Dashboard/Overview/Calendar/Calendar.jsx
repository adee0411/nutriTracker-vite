import React, { useEffect, useState } from "react";
import "./customCalendarStyles.css";
import { Calendar as ReactCalendar } from "react-calendar";
import { Card } from "@mui/joy";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedDate } from "../../../../state/appSlice";

import { formatDate } from "../../../../state/appSlice";

const Calendar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { selectedDate } = useSelector((state) => state.app.UI);

  const handleDateChange = (value, event) => {
    const formattedDate = formatDate(value);
    dispatch(setSelectedDate(formattedDate));
    navigate(`/attekintes/${formattedDate}`);
  };

  useEffect(() => {
    dispatch(setSelectedDate(params.selectedDate));
  }, []);

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
