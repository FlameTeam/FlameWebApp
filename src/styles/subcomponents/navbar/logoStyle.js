import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      height: "70px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "80px",
      paddingLeft: "2em",
    },
  },
}));

export default useStyles;
