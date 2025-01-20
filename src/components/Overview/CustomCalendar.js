import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './calendar.css' // React-Calendar default styles

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Handler to update selected date
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Box
      sx={{
       width: '286px',
       scale:"0.8",
       position:'relative',
       left:'-25px',
       display:'flex',
       justifyContent:'center',
   
        p: 3,
        background: "#f5f5f5",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          // Highlight the weekends
          if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
            return "highlight-weekend";
          }
          return null;
        }}
      />

    </Box>
  );
};

export default CustomCalendar;
