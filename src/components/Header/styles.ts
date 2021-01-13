import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundSize: "100% 100%",
    background: theme.palette.primary.dark,
  },
  headerContainer: {
    width: "100%",
    padding: theme.spacing(1),
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    height: "100%",
    color: theme.palette.primary.contrastText,
  },
  subtitle: {
    position: "relative",
    bottom: "40%",
    fontWeight: 600,
    paddingLeft: "20vw",
    color: theme.palette.primary.contrastText,
  },
}));
