import { Theme, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0, 1, 0, 1),
    cursor: "pointer",
  },
  cardText: {
    fontSize: "small",
    wordBreak: "break-word",
  },
  deleteIcon: {
    // color: "red",
    fontSize: "16px",
  },
}));
