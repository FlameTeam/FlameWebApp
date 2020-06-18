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
    marginBottom: "1em",

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
      paddingRight: "1em",
      fontSize: "3.5em",
    },
  },

  gridBoxesContainer: {
    justifyContent: "center",
    border: "1px solid black",
  },
}));

export default useStyles;
