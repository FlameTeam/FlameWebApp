import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageGrid: {
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      height: "300px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "140%",
      marginLeft: "1em",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
  },
}));

export default useStyles;
