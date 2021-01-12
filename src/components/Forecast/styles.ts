import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    color: theme.palette.primary.dark,
  },
  temp: {
    fontSize: "30px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
  },
  detailsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  weather: {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  description: {
    fontSize: "small",
    color: theme.palette.text.secondary,
  },
  noData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontSize: "small",
    color: theme.palette.text.secondary,
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));
