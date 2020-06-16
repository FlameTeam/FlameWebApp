import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "0.3em 1em",
    },
    [theme.breakpoints.up("xl")]: {},
  },
}));

export default useStyles;
