import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(0deg, #E15353 0%, #F45C43 100%)",
    flexGrow: "1",
    alignItem: "center",

    [theme.breakpoints.up("xs")]: {
      paddingBottom: "1em",
      marginTop: "81px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.5em",
      paddingBottom: "1.5em",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2em",
      paddingBottom: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "91px",
    },
  },

  imageGrid: {
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      height: "300px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "140%",
      marginLeft: "1em",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
  },

  title: {
    color: "#FFFFFF",
    fontWeight: "normal",
    textAlign: "center",

    [theme.breakpoints.up("xs")]: {
      fontSize: "2.5em",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.7em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "0",
      paddingRight: "1em",
      fontSize: "3.5em",
    },
  },

  gridBoxesContainer: {
    justifyContent: "center",
  },

  gridBox: {
    background: "#F3705A",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "1em",
      paddingBottom: "1em",
      maxWidth: "270px",
      marginBottom: "2em",
      marginLeft: "1em",
      marginRight: "1em",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1em",
      paddingBottom: "1em",
      maxWidth: "230px",
      marginBottom: "2em",
      marginRight: "-6px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2em",
      paddingBottom: "2em",
      maxWidth: "300px",
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
