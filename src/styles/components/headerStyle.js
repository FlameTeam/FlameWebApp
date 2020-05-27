import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "linear-gradient(6.53deg, #EB3333 11.2%, #F45C43 88.07%)",
    flexGrow: "1",
    height: "400px",
    border: "1px solid black",
    margin: "0"
  },

  imageGrid: {
    borderRight: "1px solid white",
    display: "flex",
    justifyContent: "center"
  },

  title: {
      color: "#FFFFFF",
      fontWeight: "normal",
      fontSize: "2.5em",
      marginTop: "0.5em",
      textAlign: "center",


      border: "1px solid blue",
      

  }
}));

export default useStyles;
