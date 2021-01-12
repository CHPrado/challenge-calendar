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
    fontWeight: 600,
    wordBreak: "break-word",
    "& span": {
      fontWeight: 400,
      whiteSpace: "nowrap",
    },
  },
  deleteIcon: {
    fontSize: "16px",
  },
}));
