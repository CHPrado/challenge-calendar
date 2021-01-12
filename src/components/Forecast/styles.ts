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
  },
  temp: {
    fontSize: "30px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  weather: {
    fontWeight: 600,
  },
  description: {
    fontSize: "small",
  },
  noData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontSize: "small",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));
