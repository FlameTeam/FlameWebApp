import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(0deg, #E15353 0%, #F45C43 100%)",
    flexGrow: "1",
    alignItem: "center",

    [theme.breakpoints.up("xs")]: {
      paddingBottom: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.5em",
      paddingBottom: "1.5em",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2em",
      paddingBottom: "3em",
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
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
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
      paddingLeft: "2.5em",
      paddingRight: "2.5em",
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
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1em",
      paddingBottom: "1em",
      maxWidth: "230px",
      marginBottom: "2em",
      marginLeft: "1em",
      marginRight: "1em",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2em",
      paddingBottom: "2em",
      maxWidth: "300px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "200px",
    },
  },

  titleBox: {
    color: "#FFFFFF",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
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
      fontSize: "1em",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
      fontSize: "1.1em",
    },
  },
}));

export default useStyles;
