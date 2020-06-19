import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // ____________________________________ Boxes __________________________________

  gridBox: {
    height: "auto",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "4em",
      marginRight: "4em",
      marginBottom: "1em",
      minWidth: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "280px",
      marginLeft: "1em",
      marginRight: "1em",
      marginTop: "1px",
      marginBottom: "0",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "12px",
    },
  },

  gridLastBox: {
    height: "auto",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "4em",
      marginRight: "4em",
      minWidth: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "280px",
      marginLeft: "1em",
      marginRight: "1em",
      marginTop: "1px",
      marginBottom: "0",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "12px",
    },
  },

  // ____________________________________ Titles __________________________________

  titleBox: {
    color: "#FFFFFF",
    fontWeight: "normal",
    textAlign: "left",

    width: "80%",
    margin: "auto",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3em",
      marginBottom: "-0.5em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
  },

  subtitlesBox: {
    color: "#FFFFFF",
    fontWeight: "normal",
    textAlign: "left",
    cursor: "pointer",

    width: "80%",
    margin: "auto",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9em",
      marginBottom: "0.5em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9em",
      marginBottom: "0.5em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
      marginBottom: "0.6em",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "1rem",
      fontSize: "1rem",
    },
  },

  finalColumnFooter: {
    color: "#FFFFFF",
    fontWeight: "normal",
    textAlign: "left",

    width: "80%",
    margin: "auto",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9em",
      marginBottom: "0.5em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9em",
      marginBottom: "0.5em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
      marginBottom: "0.6em",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "1rem",
      fontSize: "1rem",
    },
  },

  // ____________________________________ Line __________________________________

  line: {
    border: "1px solid #FFFFFF",
    background: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      marginBottom: "1.2em",
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

export default useStyles;
