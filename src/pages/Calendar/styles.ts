import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    // fontSize: "60px",
    // color: theme.palette.primary.main,
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "100px",
    //   color: theme.palette.primary.dark,
    // },
  },
  weekDaysBox: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
  },
  weekDayBox: {
    textAlign: "center",
    padding: theme.spacing(1),
    "& p": { fontWeight: 600 },
  },
  dayBox: {
    border: "solid 1px",
    padding: theme.spacing(1),
    "& p": { fontWeight: 600 },
  },
  weekDay: {
    cursor: "pointer",
  },
  weekend: {
    backgroundColor: "blue",
    opacity: 0.6,
  },
  disabledDay: {
    backgroundColor: "gray",
    opacity: 0.6,
  },
}));
