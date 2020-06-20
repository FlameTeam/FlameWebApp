import { makeStyles } from "@material-ui/core/styles";

export const textFieldStyle = makeStyles((theme) => ({
  textFieldName: {
    borderRadius: "100px",
    background: "#F45C43",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "100%",
    padding: "0",

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
      padding: "0.2em",
    },
  },

  textFieldEmailPhone: {
    borderRadius: "100px",
    background: "#F45C43",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",

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

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
      padding: "0.2em",
    },
  },
}));

export default textFieldStyle;
