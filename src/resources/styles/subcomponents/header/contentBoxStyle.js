import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridBox: {
    background: "#F3705A",
    boxShadow: "3px 3px 3px 0 rgba(0, 0, 0, 0.15)",
    borderRadius: "50px",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "1em",
      paddingBottom: "1em",
      marginBottom: "2em",
      maxWidth: "270px",
      marginLeft: "1em",
      marginRight: "1em",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1em",
      paddingBottom: "1em",
      maxWidth: "230px",
      marginTop: "1em",
      marginRight: "-6px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2em",
      paddingBottom: "2em",
      maxWidth: "300px",
      marginTop: "1.6em",
      marginRight: "1em",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },

  titleBox: {
    color: "#FFFFFF",
    fontWeight: "normal",
    textAlign: "center",

    margin: "auto",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3em",
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.8em",
    },
  },

  button: {
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
}));

export default useStyles;
