import { Theme, makeStyles } from "@material-ui/core/styles";

import palette from "../../../theme/palette";

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
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 99,
  },
  reminderBox: {
    background: theme.palette.background.paper,
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
    color: palette.text.secondary,
  },
  headerTitleCustom: {
    fontSize: "18px",
    fontWeight: 600,
    color: theme.palette.text.primary,
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
  icon: {
    color: theme.palette.text.secondary,
  },
  weatherBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(8),
  },
}));
