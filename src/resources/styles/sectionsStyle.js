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
}));

export default useStyles;
