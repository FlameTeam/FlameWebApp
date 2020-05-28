import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#FFFFFF",
    paddingTop: "0.4em",
    paddingBottom: "0.3em"
  },

  navbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "70px",
  },

  drawer: {
    paddingTop: "1em",
    height: "100%",
    color: "white",
    background: "linear-gradient(90deg, #F3705A 0%, #FFD15C 100%)",
  },

  listLinkResponsive: {
    fontFamily: "Contrail One",
    cursor: "pointer",
    padding: "0.5em 2em",
    marginBottom: "0.5em",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  menuButton: {
    color: "#F3705A",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
