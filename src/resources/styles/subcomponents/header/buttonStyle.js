import { Button, withStyles } from "@material-ui/core";

export const HeaderButton = withStyles((theme) => ({
  root: {
    marginTop: "0.5em",
    height: "41.12px",
    background: "#F45C43",
    fontFamily: "Contrail One",
    color: "#FFFFFF",
    textTransform: "capitalize",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "100px",

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
    background: "#F45C43",
    color: "#FFFFFF",
    fontFamily: "Contrail One",
    borderRadius: "60px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: "1em",

    "&:hover": {
      color: "#FFFFFF",
      background: "transparent",
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
