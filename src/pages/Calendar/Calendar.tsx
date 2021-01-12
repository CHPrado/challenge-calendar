import React, { useState } from "react";

import { Box, IconButton, Tooltip, Typography } from "@material-ui/core";
import {
  NavigateNextOutlined,
  NavigateBeforeOutlined,
} from "@material-ui/icons";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import EventBusyOutlinedIcon from "@material-ui/icons/EventBusyOutlined";
import moment, { Moment } from "moment";

import { Header } from "../../components";
import { calendarDays } from "../../helpers";
import { useReminders } from "../../hooks";
import { ReminderProps } from "../../interfaces";
import Card from "./Card";
import ReminderModal from "./ReminderModal";
import useStyles from "./styles";

const Calendar = () => {
  const classes = useStyles();
  const { getReminders, clearDay } = useReminders();

  const currentDate = moment();
  const weekDays = moment.weekdays();
  const [month, setMonth] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState<Moment>(currentDate);
  const [openReminder, setOpenReminder] = useState(false);
  const [reminders, setReminders] = useState(getReminders());

  const previousMonth = () => {
    setMonth(moment(month).subtract(1, "month"));
  };

  const nextMonth = () => {
    setMonth(moment(month).add(1, "month"));
  };

  const addReminder = (moment: Moment) => {
    setSelectedDate(moment);
    setOpenReminder(true);
  };

  const clearDayReminders = (moment: Moment) => {
    clearDay(moment);
    setReminders(getReminders());
  };

  const onReminderClose = () => {
    setOpenReminder(false);
  };

  return (
    <Box className={classes.root}>
      <Header selectedDate={month.format("YYYY, MMMM")} />
      <Box className={classes.content}>
        <Tooltip title="Previous Month" placement="right-end">
          <IconButton onClick={previousMonth} size="small">
            <NavigateBeforeOutlined fontSize="large" />
          </IconButton>
        </Tooltip>

        <Box className={classes.calendarBox}>
          <Box className={classes.calendarHeader}>
            {weekDays.map((weekDay) => (
              <Typography key={weekDay}>{weekDay}</Typography>
            ))}
          </Box>
          <Box className={classes.daysBox}>
            {calendarDays.get(month).map((date, index) => {
              const isCurrentDay = currentDate.isSame(date, "day");
              const isSameMonth = month.isSame(date, "month");
              const isWeekend = [0, 6].includes(date.weekday());

              const dayClass = isCurrentDay ? classes.currentDay : "";
              const boxClasses = `${classes.dayBox} ${
                isWeekend ? classes.weekend : ""
              } ${isSameMonth ? classes.weekDay : classes.disabledDay}`;

              const dayReminders = reminders
                .filter((reminder) => {
                  return date.isSame(moment(reminder.dateTime), "day");
                })
                .sort((a, b) => {
                  return moment(a.dateTime).diff(moment(b.dateTime), "minutes");
                }) as ReminderProps[];

              return (
                <Box key={index} className={boxClasses}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography className={`${classes.dayNumber} ${dayClass}`}>
                      {date.format("D")}
                    </Typography>
                    <Box>
                      <Tooltip title="Add Reminder">
                        <IconButton
                          onClick={() => addReminder(date)}
                          size="small"
                          disabled={!isSameMonth}
                        >
                          <AddAlertOutlinedIcon className={classes.icon} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Clear day reminders">
                        <IconButton
                          onClick={() => clearDayReminders(date)}
                          size="small"
                          disabled={!isSameMonth}
                        >
                          <EventBusyOutlinedIcon className={classes.icon} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>

                  {dayReminders.length && isSameMonth ? (
                    <Box className={classes.scrollableBox}>
                      <Box className={classes.cardBox}>
                        {dayReminders.map((reminder, index) => (
                          <Card
                            key={reminder.id}
                            reminder={reminder}
                            setReminders={setReminders}
                          />
                        ))}
                      </Box>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Tooltip title="Next Month" placement="left-end">
          <IconButton onClick={nextMonth} size="small">
            <NavigateNextOutlined fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>

      {openReminder && (
        <ReminderModal
          selectedDate={selectedDate}
          onClose={onReminderClose}
          setReminders={setReminders}
        />
      )}
    </Box>
  );
};

export default Calendar;
