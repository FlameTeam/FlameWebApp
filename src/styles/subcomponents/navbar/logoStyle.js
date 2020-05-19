import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: "flex",
    border: "1px solid red",
  },

  logoText: {
    color: "#F3705A",
    fontSize: "48px",
    paddingTop: "0.2em",
  },
}));

export default useStyles;
