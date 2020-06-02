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
      marginBottom: "2em",
      maxWidth: "280px",
      marginLeft: "1em",
      marginRight: "1em",
      marginTop: "1px",
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
      fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "21px",
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
      fontSize: "1em",
      marginBottom: "0.5em",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "0.8rem",
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "0.8rem",
      fontSize: "0.9rem",
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
