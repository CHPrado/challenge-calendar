import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundSize: "100% 100%",
    // backgroundImage: `url(${springImg})`,
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
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    paddingLeft: "20vw",
  },
}));
