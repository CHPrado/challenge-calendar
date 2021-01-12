import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 99,
  },
  reminderBox: {
    background: "#FFF",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(4),
    borderRadius: theme.spacing(1, 1, 0, 0),
  },
  headerTitle: {
    width: "100%",
  },
  headerTitleCustom: {
    fontSize: "18px",
    fontWeight: 600,
  },
  content: {
    display: "flex",
    padding: theme.spacing(4),
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  fieldGroup: {
    display: "flex",
    marginTop: theme.spacing(3),
  },
  iconBox: {
    width: theme.spacing(9),
  },
  weatherBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(8),
  },
}));
