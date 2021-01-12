import React, { useState } from "react";

import { Box, IconButton, Tooltip, Typography } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import moment from "moment";

import { contrastColor } from "../../../helpers/";
import { useReminders } from "../../../hooks";
import { ReminderProps } from "../../../interfaces";
import ReminderModal from "../ReminderModal";
import useStyles from "./styles";

interface CardProps {
  reminder: ReminderProps;
  setReminders: React.Dispatch<React.SetStateAction<ReminderProps[]>>;
}

const Card: React.FC<CardProps> = ({ reminder, setReminders }) => {
  const classes = useStyles();
  const { removeReminder, getReminders } = useReminders();

  const [openReminder, setOpenReminder] = useState(false);

  const handleDelete = () => {
    removeReminder(reminder.id);
    setReminders(getReminders());
  };

  const onReminderClose = () => {
    setOpenReminder(false);
  };

  return (
    <>
      <Box className={classes.card} style={{ background: reminder.color }}>
        <Typography
          onClick={() => setOpenReminder(true)}
          className={classes.cardText}
          style={{ color: contrastColor(reminder.color) }}
        >
          <span>{moment(reminder.dateTime).format("h:mma")}</span>
          {` ${reminder.title}`}
        </Typography>
        <Tooltip title="Remove reminder">
          <IconButton size="small" onClick={handleDelete}>
            <CloseOutlined
              className={classes.deleteIcon}
              style={{ color: contrastColor(reminder.color) }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      {openReminder && (
        <ReminderModal
          reminder={reminder}
          onClose={onReminderClose}
          setReminders={setReminders}
        />
      )}
    </>
  );
};

export default Card;
