import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    maxWidth: "1580px",
    margin: "0 auto",
    display: "grid",
    gridGap: "1rem",

    fontWeight: "normal",
    fontSize: "42px",
    color: "#F45C43",
  },

  serviceSection: {
    paddingLeft: "42px",
  },
}));

export default useStyles;
