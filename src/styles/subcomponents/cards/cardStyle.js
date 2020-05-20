import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  /* Remove extra left and right margins, due to padding in columns */
  row: {
    margin: "0 -5px",
    '&after':{
        content: "",
        display: "table",
        clear: "both",
    }
  },

  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "20px",
    textAlign: "center",
    width: "256px",
    height: "303px",
    border: "1px solid #F45C43",
    boxSizing: "border-box",
    borderRadius: "80px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },

  ['@media screen and (max-width: "600px")']: { // eslint-disable-line no-useless-computed-key
    column: {
      width: "100%",
      display: "block",
      marginBottom: "20px",
    }
  },

  /* Create three equal columns that floats next to each other */
  column: {
    float: "left",
    width: "30%",
    padding: "10px",
  },

  /* Circle and small image on card */
  image: {
    width: "160px",
    height: "160px",
    borderRadius: "100px",
  },

  /* Add some padding inside the rectangle container */
  container: {
    padding: "0px 16px",
    fontFamily: "Contrail One",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "22px",
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },

  loadingItem: {
    background: "white",
    alignItems: "center",
    borderTop: "1px solid #f0f9fb",
  },

  glowText: {
    animation: "glow 1.5s ease-in-out infinite",
    background: "#eee",
    color: "transparent",
    cursor: "progress",
    display: "inline-block",
  }
}));

export default useStyles;
