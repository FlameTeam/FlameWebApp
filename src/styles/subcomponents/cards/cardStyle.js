import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    // ____________________________________ Images __________________________________

  personalImg: {
    borderRadius: "100%",
    marginTop:"2rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.up("xs")]: {
      width: "120px",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft:"2rem",
      width: "130px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft:"2rem",
      width: "140px",
    }
  },

  image: {
    borderRadius: "100%",

    [theme.breakpoints.up("xs")]: {
      width: "150px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "160px",
    },
    [theme.breakpoints.up("md")]: {
      width: "180px",
    }
  },

  icon_img: {
    marginTop:"1rem",
    paddingRight: "5px",

    [theme.breakpoints.up("xs")]: {
      width: "20px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "25px"
    },
    [theme.breakpoints.up("md")]: {
      width: "25px"
    },
    [theme.breakpoints.up("lg")]: {
      width: "30px"
    },
  },

  // ____________________________________ Boxes __________________________________


  gridBoxesContainer: {
    justifyContent: "center"
  },

  gridBox: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "80px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },

    [theme.breakpoints.up("xs")]: {
      marginLeft: "4em",
      marginRight: "4em",
      marginBottom: "1em",
      borderRadius: "50px",
      minWidth: "252px",
      height: "15rem"
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "2em",
      maxWidth: "280px",
      marginLeft: "1em",
      marginRight: "1em",
    },
    [theme.breakpoints.up("md")]: {
      height: "18rem",
    },
    [theme.breakpoints.up("lg")]: {
      height: "20rem",
      marginLeft:"5%",
      marginRight:"5%"

    },
  },

  gridBoxLarge: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "55px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },

    [theme.breakpoints.up("xs")]: {
      marginLeft: "4em",
      marginRight: "4em",
      marginBottom: "1em",
      borderRadius: "50px",
      height:"22rem",
      minWidth: "255px",
      maxWidth: "360px",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "2em",
      maxWidth: "500px",
      minWidth:"397px",
      marginLeft: "1em",
      marginRight: "1em",
      height: "15rem",
    },
    [theme.breakpoints.up("lg")]: {
      height: "15rem",
      minWidth: "475px",
      marginLeft:"5%",
      marginRight:"5%"

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
      fontSize: "1.3em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.3em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em"
    },
  },

  firstTitle: {
    color: "#F45C43",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",
    marginTop: "1em",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.3em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.4em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.4em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em"
    },
  },

  secondTitle: {
    lineHeight: "23px",
    color: "#101010",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",
    marginTop: "1em",
    marginBottom: "1em",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.0em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3em"
    },
  },

  thirdTitle: {
    lineHeight: "20px",
    color: "#101010",
    fontWeight: "normal",
    textAlign: "center",

    width: "80%",
    margin: "auto",
    marginTop: "0.5em",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9em"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.0em"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.0em"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1em"
    },
  },

}));

export default useStyles;
