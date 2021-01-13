import React, { useState } from "react";

import { Box, IconButton, Tooltip, Typography } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import moment from "moment";

import { AlertDialog, AlertDialogProps } from "../../../components";
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
  const [dialog, setDialog] = useState<AlertDialogProps>({ open: false });

  const handleDelete = () => {
    setDialog({
      open: true,
      title: "Remove reminder",
      description: `Wish to remove the reminder for ${moment(
        reminder.dateTime
      ).format("yyyy/MM/D HH:mm")} ${reminder.title}?`,
      onClose: () => setDialog({ open: false }),
      onConfirm: () => {
        removeReminder(reminder.id);
        setReminders(getReminders());
        setDialog({ open: false });
      },
    });
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

      <AlertDialog {...dialog} />
    </>
  );
};

export default Card;
