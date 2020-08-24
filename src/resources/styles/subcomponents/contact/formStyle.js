import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    background: "#F3705A",
    margin: "auto",
    padding: "2em",
    boxShadow: "3px 3px 3px 0 rgba(0, 0, 0, 0.15)",
    borderRadius: "50px",

    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },

    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },

  textFieldsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
