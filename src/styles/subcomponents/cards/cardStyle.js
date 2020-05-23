import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    textAlign: "center",
    width: "256px",
    height: "20rem",
    border: "1px solid #F45C43",
    boxSizing: "border-box",
    borderRadius: "80px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },

  cards: {
    maxWidth: "1400px",
    margin: " 0 auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
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
