import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyleType: "none",
    background: "linear-gradient(90deg, #F3705A 0%, #FFD15C 100%)",
    borderRadius: "20px",
    padding: "0 3em",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  listItemLink: {
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
    },
  },
}));

export default useStyles;
