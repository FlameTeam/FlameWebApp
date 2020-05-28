import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(0deg, #D85656 0%, #F45C43 100%)",
    flexGrow: "1",
    alignItem: "center",
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
    marginTop: "0.1em",
    textAlign: "center",

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

  gridBoxesContainer: {
    justifyContent: "center",
  },

  gridBox: {
    background: "#F3705A",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "4em",
      marginRight: "4em",
      marginBottom: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "2em",
      maxWidth: "290px",
      marginLeft: "1em",
      marginRight: "1em",
    },
    [theme.breakpoints.up("md")]: {
      height: "185px",
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
    marginTop: "1em",

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
    marginBottom: "1em",

    [theme.breakpoints.up("xs")]: {
      paddingLeft: "1.4em",
      paddingRight: "1.4em",
      fontSize: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "0.8em",
      paddingRight: "0.8em",
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
