import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    background: "linear-gradient(180.36deg, #E15353 0.71%, #F45C43 99.35%)",

    [theme.breakpoints.up("xs")]: {
      paddingBottom: "2.2em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "3.2em",
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: "4em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "5.5em",
    },
  },

  title: {
    fontWeight: "normal",
    color: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "0.8em",
      paddingLeft: "0.6em",
      fontSize: "2.1em",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.1em",
      paddingLeft: "0.6em",
      fontSize: "2.5em",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "1.1em",
      paddingLeft: "0.6em",
      fontSize: "2.7em",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "1.4em",
      paddingLeft: "0.6em",
      fontSize: "3em",
    },
  },

  form: {
    background: "#F3705A",
    margin: "auto",
    padding: "2em",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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

  textFieldName: {
    borderRadius: "100px",
    background: "#F45C43",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "100%",
    marginBottom: "1em",
    padding: "0",

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
      padding: "0.2em",
    },
  },

  emailPhoneTextFieldGrid: {
    margin: "auto",
  },

  textFieldEmailPhone: {
    borderRadius: "100px",
    background: "#F45C43",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: "1em",

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
      padding: "0.2em",
    },
  },

  textFieldMessage: {
    borderRadius: "60px",
    background: "#F45C43",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "100%",
    marginBottom: "1em",

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
      padding: "0.2em",
    },
  },

  input: {
    color: "white",
    marginLeft: "1em",
    marginRight: "1em",
    fontFamily: "Contrail One",
  },

  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },

  button: {
    background: "#F45C43",
    color: "#FFFFFF",
    fontFamily: "Contrail One",
    borderRadius: "60px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",

    "&:hover": {
      color: "#FFFFFF",
      background: "transparent",
    },

    [theme.breakpoints.up("xs")]: {
      width: "50%",
      fontSize: "1.1em",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3em",
    },
  },
}));

export default useStyles;
