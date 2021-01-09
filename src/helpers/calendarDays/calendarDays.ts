import moment, { Moment } from "moment";

const calendarDays = {
  get(selectedDate: Moment) {
    const monthStart = selectedDate.clone().startOf("month");
    const firstWeekStart = monthStart.clone().startOf("week");

    const monthEnd = selectedDate.clone().endOf("month");
    const lastWeekEnd = monthEnd.clone().endOf("week");

    const calendarDaysAmount = lastWeekEnd
      .weekday(6)
      .diff(firstWeekStart.weekday(0), "days");

    const calendarDaysArray = [];
    var i;
    for (i = 0; i <= calendarDaysAmount; i++) {
      calendarDaysArray.push(moment(firstWeekStart).add(i, "days"));
    }

    return calendarDaysArray;
  },
};

export default calendarDays;
