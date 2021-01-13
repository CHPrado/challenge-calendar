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

import {
  Forecast,
  InputCity,
  AlertDialog,
  AlertDialogProps,
} from "../../../components";
import { useReminders } from "../../../hooks";
import { ReminderProps } from "../../../interfaces";
import theme from "../../../theme";
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
  const [color, setColor] = useState(
    reminder?.color || theme.palette.primary.main
  );
  const [city, setCity] = useState(reminder?.city || { description: "" });
  const [error, setError] = useState(false);
  const [dialog, setDialog] = useState<AlertDialogProps>({ open: false });

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

  const handleDelete = (reminder: ReminderProps) => {
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
        onClose();
        setDialog({ open: false });
      },
    });
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
              <IconButton size="small" onClick={() => handleDelete(reminder)}>
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
          <Box>
            <TextField
              placeholder="Add a title"
              value={title}
              size="small"
              onChange={(event) => setTitle(event.target.value)}
              inputProps={{ maxLength: 30 }}
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
                  ampm={true}
                  format="yyyy/MM/dd h:mma"
                  onError={(error) => {
                    setError(!!error);
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Box>

            <Box className={classes.fieldGroup}>
              <Box className={classes.iconBox}>
                <LocationOnOutlinedIcon className={classes.icon} />
              </Box>
              <InputCity
                value={city?.description}
                onSelect={handleCitySelect}
              />
            </Box>
            <Box className={classes.fieldGroup}>
              <Box className={classes.iconBox}>
                <SubjectOutlinedIcon className={classes.icon} />
              </Box>
              <TextField
                placeholder="Add a description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                variant="filled"
                multiline
                rows={5}
                inputProps={{ maxLength: 100, width: "100%" }}
                fullWidth
              />
            </Box>
          </Box>

          <Box className={classes.weatherBox}>
            <Forecast dateTime={dateTime} coordinates={city.coordinates} />
          </Box>
        </Box>

        <Box className={classes.footer}>
          <Button color="primary" onClick={handleClickClose}>
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

      <AlertDialog {...dialog} />
    </Box>
  );
};

export default ReminderModal;
