import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: "flex",
    cursor: "pointer",
  },

  logoText: {
    color: "#F3705A",
    fontSize: "48px",
    paddingTop: "0.2em",
    cursor: "pointer",
  },
}));

export default useStyles;
