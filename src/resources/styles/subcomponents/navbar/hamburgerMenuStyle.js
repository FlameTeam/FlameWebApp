import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hamburgerMenu: {
    color: "#F3705A",
    [theme.breakpoints.up("xs")]: {
      width: "50px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60px",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
