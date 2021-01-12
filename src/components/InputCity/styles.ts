import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  suggestionsBox: {
    position: "absolute",
    width: "inherit",
    background: theme.palette.background.paper,
    boxShadow: "3px 5px 10px 6px rgba(0, 0, 0, 0.4)",
    padding: theme.spacing(1, 0, 1, 0),
    zIndex: 999,
  },
  suggestion: {
    display: "flex",
    padding: theme.spacing(2, 2, 2, 4),
  },
  cityName: {
    fontSize: "14px",
    color: theme.palette.text.primary,
  },
  cityDetails: {
    fontSize: "small",
    color: theme.palette.text.secondary,
  },
  icon: {
    margin: theme.spacing(1, 2, 0, 0),
    fontSize: "1.25rem",
  },
}));
