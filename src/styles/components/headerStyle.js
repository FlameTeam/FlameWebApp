import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(0deg, #D85656 0%, #F45C43 100%)",
    flexGrow: "1",
    alignItem: "center",
    
    
    [theme.breakpoints.up("sm")]: {
      // paddingBottom: "20em",
      border: "1px solid black",
      height: "400px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "410px",
    },
    [theme.breakpoints.up("md")]: {
      height: "430px",
    }
    
   
  },

  imageGrid: {
    margin: "0",
    display: "flex",
    justifyContent: "center",
    // border: "1px solid white"
    
  },

  image: {    
    // border: "1px solid black",
    [theme.breakpoints.up("xs")]: {
      height: "300px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "340px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
    }
  },

  title: {
      color: "#FFFFFF",
      fontWeight: "normal",
      fontSize: "2.5em",
      marginTop: "0.1em",
      textAlign: "center",
      // border: "1px solid white"
      
      [theme.breakpoints.up("xs")]: {
        fontSize: "2.5em",
        paddingLeft: "1em",
        paddingRight: "1em",
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: "0.8em",
        paddingLeft: "0",
        paddingRight: "0",
       
        // border: "1px solid black"
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
    display: "flex",
    justifyContent: "space-around"
  },

  gridItemBox: {
    border: "1px solid white",
    height: "200px",
    width: "40%"
  }
}));

export default useStyles;
