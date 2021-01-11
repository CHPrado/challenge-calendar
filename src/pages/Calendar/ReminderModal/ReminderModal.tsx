import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { CloseOutlined, DeleteOutlined } from "@material-ui/icons";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SubjectOutlinedIcon from "@material-ui/icons/SubjectOutlined";
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ColorPicker } from "material-ui-color";
import moment, { Moment } from "moment";

import { InputCity } from "../../../components";
import { useReminders } from "../../../hooks";
import { ReminderProps } from "../../../interfaces";
import useStyles from "./styles";

interface ReminderModalProps {
  reminder?: ReminderProps;
  selectedDate?: Moment;
  onClose: () => void;
  setReminders: React.Dispatch<React.SetStateAction<ReminderProps[]>>;
}

const ReminderModal: React.FC<ReminderModalProps> = ({
  reminder,
  selectedDate,
  onClose,
  setReminders,
}) => {
  const classes = useStyles();
  const {
    saveReminder,
    editReminder,
    getReminders,
    removeReminder,
  } = useReminders();

  const [title, setTitle] = useState(reminder?.title || "");
  const [description, setDescription] = useState(reminder?.description || "");
  const [dateTime, setDateTime] = useState<Moment>(
    (reminder && moment(reminder?.dateTime)) || selectedDate || moment()
  );
  const [color, setColor] = useState(reminder?.color || "green");
  const [city, setCity] = useState(reminder?.city || { description: "" });
  const [error, setError] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setDateTime(moment(date));
  };

  const handleCitySelect = (
    description: string,
    coordinates: google.maps.LatLngLiteral
  ) => {
    setCity({ description, coordinates });
  };

  const handleClickClose = () => {
    onClose();
  };

  const handleClickSave = () => {
    if (reminder)
      editReminder(reminder.id, title, description, dateTime, color, city);
    else saveReminder(title, description, dateTime, color, city);

    setReminders(getReminders());
    onClose();
  };

  const handleDelete = (reminderId: string) => {
    removeReminder(reminderId);
    setReminders(getReminders());
    onClose();
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.reminderBox}>
        <Box className={classes.header}>
          <Typography variant="h5" className={classes.headerTitle}>
            {reminder ? "Edit Reminder" : "New Reminder"}
          </Typography>
          {reminder && (
            <Tooltip title="Remove reminder">
              <IconButton
                size="small"
                onClick={() => handleDelete(reminder.id)}
              >
                <DeleteOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Cancel">
            <IconButton size="small" onClick={handleClickClose}>
              <CloseOutlined fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box className={classes.content}>
          <TextField
            placeholder="Add a title"
            value={title}
            size="small"
            onChange={(event) => setTitle(event.target.value)}
            inputProps={{ maxLength: 15 }}
            InputProps={{
              classes: {
                input: classes.headerTitleCustom,
              },
            }}
            fullWidth
          />
          <Box className={classes.fieldGroup}>
            <ColorPicker
              hideTextfield
              value={color}
              onChange={(value) => {
                setColor(`#${value.hex}`);
              }}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDateTimePicker
                value={dateTime}
                onChange={handleDateChange}
                ampm={false}
                format="yyyy/MM/dd HH:mm"
                onError={(error) => {
                  setError(!!error);
                }}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Box>

          <Box className={classes.fieldGroup}>
            <Box className={classes.IconBox}>
              <LocationOnOutlinedIcon />
            </Box>
            <InputCity value={city?.description} onSelect={handleCitySelect} />
          </Box>
          <Box className={classes.fieldGroup}>
            <Box className={classes.IconBox}>
              <SubjectOutlinedIcon />
            </Box>
            <TextField
              placeholder="Add a description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              variant="filled"
              multiline
              rows={2}
              inputProps={{ maxLength: 30, width: "100%" }}
              fullWidth
            />
          </Box>
        </Box>

        <Box className={classes.footer}>
          <Button variant="outlined" color="primary" onClick={handleClickClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickSave}
            disabled={error}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReminderModal;
