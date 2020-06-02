import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // ____________________________________ Images __________________________________

  personalImg: {
    borderRadius: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.up("xs")]: {
      marginTop: "1rem",
      width: "140px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "120px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "2rem",
      marginLeft: "1rem",
      width: "150px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "1rem",
      marginLeft: "2rem",
      width: "180px",
    },
  },

  image: {
    borderRadius: "100%",

    [theme.breakpoints.up("xs")]: {
      width: "130px",
      marginTop: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "120px",
    },
    [theme.breakpoints.up("md")]: {
      width: "160px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "200px",
    },
  },

  icon_img: {
    paddingRight: "5px",

    [theme.breakpoints.up("xs")]: {
      width: "20px",
      marginTop: "0.5rem",
      marginBottom: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "22px",
      marginTop: "0.5rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "20px",
      marginTop: "0.9rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "24px",
      marginTop: "1rem",
    },
  },

  // ____________________________________ Boxes __________________________________

  gridBox: {
    boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "80px",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "2em",
      marginRight: "2em",
      marginBottom: "4em",
      borderRadius: "50px",
      minWidth: "168px",
      maxWidth: "390px",
      paddingTop: "2em",
      paddingBottom: "2em",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "1em",
      maxWidth: "350px",
      minWidth: "180px",
      marginLeft: "0.6em",
      marginRight: "0.6em",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "2em",
      marginRight: "2em",
      paddingTop: "3em",
      paddingBottom: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "2em",
      marginRight: "2em",
    },
  },

  gridLastBox: {
    boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "80px",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "2em",
      marginRight: "2em",
      marginBottom: "0",
      borderRadius: "50px",
      minWidth: "168px",
      maxWidth: "390px",
      paddingTop: "2em",
      paddingBottom: "2em",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "1em",
      maxWidth: "350px",
      minWidth: "180px",
      marginLeft: "0.6em",
      marginRight: "0.6em",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "2em",
      marginRight: "2em",
      paddingTop: "3em",
      paddingBottom: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "2em",
      marginRight: "2em",
    },
  },

  gridBoxLarge: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "55px",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "2em",
      marginRight: "2em",
      marginBottom: "4em",
      borderRadius: "50px",
      minWidth: "250px",
      maxWidth: "350px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "1.2em",
      marginRight: "1.2em",
      borderRadius: "50px",
      minWidth: "170px",
      maxWidth: "300px",
      marginBottom: "3em",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "384px",
      marginLeft: "5%",
      marginRight: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "15rem",
      minWidth: "475px",
      marginLeft: "5%",
      marginRight: "5%",
    },
  },

  gridLastBoxLarge: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "55px",

    [theme.breakpoints.up("xs")]: {
      marginLeft: "2em",
      marginRight: "2em",
      marginBottom: "2.2em",
      borderRadius: "50px",
      minWidth: "250px",
      maxWidth: "350px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "1.2em",
      marginRight: "1.2em",
      borderRadius: "50px",
      minWidth: "170px",
      maxWidth: "300px",
      marginBottom: "3em",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "384px",
      marginLeft: "5%",
      marginRight: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "15rem",
      minWidth: "475px",
      marginLeft: "5%",
      marginRight: "5%",
    },
  },

  // ____________________________________ Titles __________________________________

  titleBox: {
    color: "#101010",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",
    marginTop: "1em",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
    },
  },

  firstTitle: {
    color: "#F45C43",
    fontWeight: "normal",
    textAlign: "center",

    marginTop: "1em",
    width: "80%",
    margin: "auto",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
    },
  },

  secondTitle: {
    lineHeight: "23px",
    color: "#101010",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",
    marginTop: "0.8em",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.0em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3em",
    },
  },

  thirdTitle: {
    lineHeight: "20px",
    color: "#101010",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",
    marginTop: "0.2em",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.0em",
      marginLeft: "1.9em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1em",
    },
  },
}));

export default useStyles;
