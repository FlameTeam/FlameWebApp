import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    paddingTop: "1em",
    height: "100%",
    background: "linear-gradient(90deg, #F3705A 0%, #FFD15C 100%)",
  },

  drawerLink: {
    cursor: "pointer",
    padding: "0.5em 2em",
    marginBottom: "0.5em",
    color: "#FFFFFF",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
