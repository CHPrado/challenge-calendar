import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  calendarBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "95%",
    padding: theme.spacing(1, 2, 2, 2),
    borderRadius: theme.spacing(2),
    background: "lightgray",
  },
  calendarHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1, 1, 1),
    "& p": {
      textAlign: "center",
      fontWeight: 600,
      width: "100%",
    },
  },
  daysBox: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    height: "100%",
    borderTop: "solid 1px",
    borderLeft: "solid 1px",
  },
  dayBox: {
    display: "flex",
    flexDirection: "column",
    borderRight: "solid 1px",
    borderBottom: "solid 1px",
    padding: theme.spacing(1),
  },
  dayNumber: {
    fontSize: "small",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  currentDay: {
    background: "red",
    borderRadius: "50%",
    width: theme.spacing(6),
    lineHeight: `${theme.spacing(6)}px`,
    textAlign: "center",
  },
  weekDay: {},
  weekend: {
    background: "blue",
  },
  disabledDay: {
    background: "gray",
    "& p": {
      opacity: 0.6,
    },
  },
  scrollableBox: {
    position: "relative",
    overflow: "auto",
    height: "100%",
  },
  cardBox: {
    position: "absolute",
    width: "100%",
  },
  icon: {
    fontSize: "18px",
  },
}));
