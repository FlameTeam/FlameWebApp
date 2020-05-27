import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: "flex",
    cursor: "pointer",
  },

  logoText: {
    color: "#F3705A",
    fontFamily: "Contrail One",
    fontSize: "48px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "normal",
  },
}));

export default useStyles;
