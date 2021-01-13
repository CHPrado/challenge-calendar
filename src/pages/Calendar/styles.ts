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
    paddingTop: theme.spacing(1),
  },
  calendarBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "95%",
    padding: theme.spacing(2, 4, 4, 4),
    borderRadius: theme.spacing(2),
    background: theme.palette.background.paper,
  },
  calendarHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1, 1, 1),
    "& p": {
      textAlign: "center",
      fontWeight: 600,
      width: "100%",
      color: theme.palette.text.secondary,
    },
  },
  daysBox: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    height: "100%",
    borderTop: `solid 1px ${theme.palette.divider}`,
    borderLeft: `solid 1px ${theme.palette.divider}`,
    color: theme.palette.text.primary,
  },
  dayBox: {
    display: "flex",
    flexDirection: "column",
    borderRight: `solid 1px ${theme.palette.divider}`,
    borderBottom: `solid 1px ${theme.palette.divider}`,
    padding: theme.spacing(1),
  },
  dayNumber: {
    fontSize: "small",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  currentDay: {
    background: theme.palette.primary.dark,
    borderRadius: "50%",
    width: theme.spacing(6),
    lineHeight: `${theme.spacing(6)}px`,
    textAlign: "center",
    color: theme.palette.primary.contrastText,
  },
  weekDay: {
    "& svg": {
      color: theme.palette.text.primary,
    },
  },
  weekend: {
    background: theme.palette.primary.light,
  },
  disabledDay: {
    background: theme.palette.secondary.light,
    color: theme.palette.text.secondary,
    "& p": { fontWeight: 400 },
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
