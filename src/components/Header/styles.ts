import { Theme, makeStyles } from "@material-ui/core/styles";

import springImg from "../../assets/images/spring.png";

export default makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundSize: "100% 100%",
    backgroundImage: `url(${springImg})`,
  },
  headerContainer: {
    width: "100%",
    padding: theme.spacing(2),
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    fontSize: "50px",
    fontWeight: 600,
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontSize: "30px",
    fontWeight: 600,
    paddingLeft: "20vw",
  },
}));
