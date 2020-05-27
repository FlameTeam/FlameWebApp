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
    
  },

  image: {
    
    [theme.breakpoints.up("xs")]: {
      height: "300px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "340px",
    },
    [theme.breakpoints.up("md")]: {
      height: "375px",
    }
  },

  title: {
      color: "#FFFFFF",
      fontWeight: "normal",
      fontSize: "2.5em",
      marginTop: "0",
      textAlign: "center",

      [theme.breakpoints.up("xs")]: {
        fontSize: "2.3em",
        paddingLeft: "1em",
        paddingRight: "1em"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.4em",
      }
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
