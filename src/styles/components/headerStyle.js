import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(6.53deg, #EB3333 11.2%, #F45C43 88.07%)",
    flexGrow: "1",
    alignItem: "center",
    height: "400px",
    
    margin: "0",

    [theme.breakpoints.down("xs")]: {
      height: "900px",
    },
   
  },

  imageGrid: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0",
    border: "1px solid white"
  },

  image: {
    marginBottom: "0",
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
      marginTop: "0.5em",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2em",
      },
      

      // border: "1px solid blue",
  },

  gridBoxesContainer: {
    display: "flex",
    justifyContent: "space-around"
  },

  gridItemBox: {
    border: "1px solid white",
    margin: "0.5em",
    height: "200px",
    width: "40%"
  }
}));

export default useStyles;
