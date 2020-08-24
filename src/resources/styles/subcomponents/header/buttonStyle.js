import { Button, withStyles } from "@material-ui/core";

export const HeaderButton = withStyles((theme) => ({
  root: {
    marginTop: "0.5em",
    height: "41.12px",
    background: "#FF5235",
    fontFamily: "Contrail One",
    color: "#FFFFFF",
    textTransform: "capitalize",
    borderRadius: "100px",

    '&:hover': {
      background: "#FF4122",
   },

    [theme.breakpoints.up("xs")]: {
      paddingLeft: "1.4em",
      paddingRight: "1.4em",
      fontSize: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "0.7em",
      paddingRight: "0.7em",
      fontSize: "0.9em",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
      fontSize: "1.1em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
      fontSize: "1.4em",
    },
  },
}))(Button);

export const FormButton = withStyles((theme) => ({
  root: {
    background: "#FF5235",
    color: "#FFFFFF",
    fontFamily: "Contrail One",
    borderRadius: "60px",
    marginTop: "1em",

    "&:hover": {
      color: "#FFFFFF",
      background: "#FF4122",
    },

    [theme.breakpoints.up("xs")]: {
      width: "50%",
      fontSize: "1.1em",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3em",
    },
  },
}))(Button);
