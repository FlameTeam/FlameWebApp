import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // ____________________________________ Services & Team __________________________________

  gridBoxesContainer: {
    justifyContent: "center",
  },

  header: {
    flexGrow: "1",
    alignItem: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop:"4rem",
      paddingBottom:"5rem",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop:"3rem",
      paddingBottom:"10rem",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop:"2rem",
      paddingBottom:"12rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop:"5rem",
      paddingBottom:"18rem",
    },
  },

  title: {
    color: "#F45C43",
    fontWeight: "normal",
    textAlign: "left",

    [theme.breakpoints.up("xs")]: {
      paddingBottom:"5rem",
      fontSize: "2em",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom:"2rem",
      marginTop: "0.8em",
      fontSize: "2.5em",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom:"8rem",
      fontSize: "2.7em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "2.5em",
      paddingRight: "2.5em",
    },
  },

  gradientBackground: {
    background: "linear-gradient(179.68deg, #F46443 4.56%, #FFD15C 255.72%)",
    flexGrow: "1",
    alignItem: "center",
    paddingBottom:"4rem",
  }

}));

export default useStyles;
