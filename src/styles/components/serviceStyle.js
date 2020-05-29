import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: "1",
    alignItem: "center",
  },

  title: {
      color: "#F45C43",
      fontWeight: "normal",
      marginTop: "0.1em",
      textAlign: "left",

      [theme.breakpoints.up("xs")]: {
        fontSize: "2.5em",
        paddingLeft: "1em",
        paddingRight: "1em",
      },
      [theme.breakpoints.up("sm")]: {
        marginTop: "0.8em",
        fontSize: "2.5em",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.7em",
      },
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "2.5em",
        paddingRight: "2.5em",
      },
  },

  // titleWrapper: {
  //   maxWidth: "1580px",
  //   margin: "0 auto",
  //   display: "grid",
  //   gridGap: "1rem",
  //
  //   fontWeight: "normal",
  //   fontSize: "42px",
  //   color: "#F45C43",
  // },
  //
  // serviceSection: {
  //   paddingLeft: "42px",
  // }

}));

export default useStyles;
