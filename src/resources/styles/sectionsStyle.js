import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "0.3em 1em",
    },
    [theme.breakpoints.up("xl")]: {},
  },

  header: {
    background: "linear-gradient(0deg, #E15353 0%, #F45C43 100%)",

    [theme.breakpoints.up("xs")]: {
      marginTop: "74px",
      padding: "1em 0em",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "74px",
      padding: "2em 0em 1em 0em",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "74px",
      padding: "3em 0em 2em 0em",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "94px",
      padding: "4em 2em 3em 0em",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "4em 2em",
    },
  },

  //CONTACT
  contact: {
    background: "linear-gradient(180.36deg, #E15353 0.71%, #F45C43 99.35%)",

    [theme.breakpoints.up("xs")]: {
      paddingBottom: "2.2em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "3.2em",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: "4em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "5.5em",
    },
  },

  contactTitle: {
    fontWeight: "normal",
    color: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "0.8em",
      paddingLeft: "0.6em",
      fontSize: "2.1em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.1em",
      paddingLeft: "0.6em",
      fontSize: "2.5em",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "1.1em",
      paddingLeft: "0.6em",
      fontSize: "2.7em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "1.4em",
      paddingLeft: "0.6em",
      fontSize: "3em",
    },
  },
}));

export default useStyles;
