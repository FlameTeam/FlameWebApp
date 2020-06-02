import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // ____________________________________ Services & Team __________________________________

  gridBoxesContainer: {
    justifyContent: "center"
  },

  header: {
    flexGrow: "1",
    alignItem: "center",
  },

  title: {
    color: "#F45C43",
    fontWeight: "normal",
    marginTop: "0.1em",
    textAlign: "left",

    [theme.breakpoints.up("xs")]: {
      fontSize: "2.5em",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0.8em",
      fontSize: "2.5em",
    },
    [theme.breakpoints.up("md")]: {
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
  }

}));

export default useStyles;
