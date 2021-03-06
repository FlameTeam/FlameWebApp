import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#0454EF", //Blue
      secondary: "#FFFFFF", //White
    },
  },

  typography: {
    fontFamily: "Contrail One",

    h1: {
      [breakpoints.up("xs")]: {
        fontSize: "1.8em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "2em",
      },
      [breakpoints.up("md")]: {
        fontSize: "2.2em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "2.5em",
      },
    },

    h2: {
      [breakpoints.up("xs")]: {
        fontSize: "1.2em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "1.3em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1.5em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.7em",
      },
    },

    body2: {
      color: "#FFFFFF",
      marginTop: "1em",
      fontSize: "1em",
    },
  },

  overrides: {
    MuiInputLabel: {
      root: {
        marginTop: "-10px",
        marginLeft: "1em",
        fontSize: "1.1em",
        color: "#FFFFFF",
        fontFamily: "Contrail One",
        "&$focused": {
          color: "#FFFFFF",
        },
      },
    },

    MuiInput: {
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
    },
  },
});
