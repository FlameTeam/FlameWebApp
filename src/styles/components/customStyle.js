import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // ____________________________________ Services & Team __________________________________

  gridBoxesContainer: {
    justifyContent: "center",
  },

  header: {
    flexGrow: "1",
    alignItem: "center",
    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },

  title: {
    color: "#F45C43",
    fontWeight: "normal",
    textAlign: "left",

    [theme.breakpoints.up("xs")]: {
      fontSize: "2.2em",
      marginLeft: "0.6em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.7em",
    },
    [theme.breakpoints.up("lg")]: {},
  },

  gradientBackground: {
    background: "linear-gradient(179.68deg, #F46443 4.56%, #FFD15C 255.72%)",
    flexGrow: "1",
    alignItem: "center",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "2.2em",
      paddingBottom: "2.1em",
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

export default useStyles;
