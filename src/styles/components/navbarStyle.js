import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#blue",
    height: "72px",
    border: "1px solid black",
  },

  navbarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between;",
    alignItems: "center",
    border: "1px solid yellow",
  },
}));

export default useStyles;
