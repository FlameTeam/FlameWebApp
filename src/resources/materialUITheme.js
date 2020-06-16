import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const theme = createMuiTheme({
  palette: {
    text: {},
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
  },
});
