import moment, { Moment } from "moment";

import { ReminderProps } from "../../interfaces";

const useReminders = () => {
  const getReminders = () => {
    return (
      (JSON.parse(
        localStorage.getItem("challenge-reminders") as string
      ) as ReminderProps[]) || []
    );
  };

  const saveReminder = (
    title: string,
    description: string,
    dateTime: Moment,
    color: string,
    city: ReminderProps["city"]
  ) => {
    const reminders = getReminders();

    reminders.push({
      id: moment().format("yyyyMMDHHmmssSSS"),
      title: title || "(No title)",
      description,
      dateTime: dateTime.format("yyyy/MM/D HH:mm"),
      color,
      city,
    });

    localStorage.setItem("challenge-reminders", JSON.stringify(reminders));
  };

  const editReminder = (
    id: string,
    title: string,
    description: string,
    dateTime: Moment,
    color: string,
    city: ReminderProps["city"]
  ) => {
    let reminders = getReminders();

    reminders.forEach((reminder, index, reminders) => {
      if (reminder.id === id) {
        reminders[index] = {
          id,
          title: title || "(No title)",
          description,
          dateTime: dateTime.format("yyyy/MM/D HH:mm"),
          color,
          city,
        };
      }
    });

    localStorage.setItem("challenge-reminders", JSON.stringify(reminders));
  };

  const removeReminder = (id: string) => {
    let reminders = getReminders();

    reminders = reminders.filter((reminder) => {
      return reminder.id !== id;
    }) as ReminderProps[];

    localStorage.setItem("challenge-reminders", JSON.stringify(reminders));
  };

  const clearDay = (day: Moment) => {
    let reminders = getReminders();

    reminders = reminders.filter((reminder) => {
      return !day.isSame(moment(reminder.dateTime), "day");
    }) as ReminderProps[];

    localStorage.setItem("challenge-reminders", JSON.stringify(reminders));
  };

  return {
    getReminders,
    saveReminder,
    editReminder,
    removeReminder,
    clearDay,
  };
};

export default useReminders;
