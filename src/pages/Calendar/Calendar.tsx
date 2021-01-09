import React, { useState } from "react";

import { Box, Button, Typography } from "@material-ui/core";
import moment, { Moment } from "moment";

import Header from "../../components/Header";
import { calendarDays } from "../../helpers";
import useStyles from "./styles";

const Calendar = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(moment());

  const weekDays = moment.weekdays();

  const previousMonth = () => {
    setSelectedDate(moment(selectedDate).subtract(1, "month"));
  };

  const nextMonth = () => {
    setSelectedDate(moment(selectedDate).add(1, "month"));
  };

  const addReminder = (moment: Moment) => {
    console.log("aaaaa");
  };

  return (
    <>
      <Header selectedDate={selectedDate.format("YYYY, MMMM")} />
      <Box className={classes.root}>
        <Box className={classes.weekDaysBox}>
          {weekDays.map((weekDay) => (
            <Box key={weekDay} className={classes.weekDayBox}>
              <Typography>{weekDay}</Typography>
            </Box>
          ))}
          {calendarDays.get(selectedDate).map((moment, index) => {
            const isSameMonth = selectedDate.isSame(moment, "month");
            const isWeekend = [0, 6].includes(moment.weekday());

            const boxClasses = `${classes.dayBox} ${
              isWeekend ? classes.weekend : ""
            } ${isSameMonth ? classes.weekDay : classes.disabledDay}`;

            return (
              <Box
                key={index}
                className={boxClasses}
                onClick={() => addReminder(moment)}
              >
                <Typography>{moment.format("D")}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Button onClick={previousMonth}>Previous</Button>
      <Button onClick={nextMonth}>Next</Button>
    </>
  );
};

export default Calendar;
