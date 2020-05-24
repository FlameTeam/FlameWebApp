import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  /*  -------------------------------------------------------------------First Card------------------------------------------------------------------------*/
  cards: {
    maxWidth: "1680px",
    margin: " 20px auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
  },

  card: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    textAlign: "center",
    width: "256px",
    height: "20rem",
    boxSizing: "border-box",
    borderRadius: "80px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },

  /* Add some padding inside the rectangle container */
  container: {
    padding: "0px 16px",
    fontSize: "22px",
    lineHeight: "28px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },

  /*  -------------------------------------------------------------------Second Card------------------------------------------------------------------------*/
  second_cards: {
    maxWidth: "1680px",
    margin: " 20px auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(472px, 1fr))"
  },

  second_card: {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    textAlign: "center",
    width: "472px",
    height: "240px",
    boxSizing: "border-box",
    borderRadius: "55px",
    '&:hover': {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },

  row: {
    display: "flex"
  },

  column: {
    float: "left",
  },

  left: {
    width: "40%",
    margin:"5px 0",
  },

  right: {
    width: "60%",
  },

  /* Add some padding inside the rectangle container */
  second_container: {
    padding: "23px 10px",
    fontSize: "22px",
    lineHeight: "28px",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },

  /*  ------------------------------------------------------------------Other Settings ------------------------------------------------------------------------*/

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
  },

  firstTitle:{
    fontSize: "28px",
    lineHeight: "35px",
    color: "#F45C43",
    marginBottom: "10px",
  },

  secondTitle:{
    fontSize: "18px",
    lineHeight: "23px",
    color: "#101010",
    marginBottom: "10px",
  },

  thirdTitle:{
    fontSize: "16px",
    lineHeight: "20px",
    color: "#101010",
  },

  /*  ------------------------------------------------------------------Imágenes ------------------------------------------------------------------------*/

  /* Circle and small image on card */
  personal_image: {
    width: "163px",
    height: "163px",
    borderRadius: "100px",
  },

  /* Circle and small image on card */
  image: {
    width: "160px",
    height: "160px",
    borderRadius: "100px",
  },

  icon_img: {
    width: "30px",
    height: "30px",
    marginTop:"10px",
    paddingRight: "5px",
  },



}));

export default useStyles;
