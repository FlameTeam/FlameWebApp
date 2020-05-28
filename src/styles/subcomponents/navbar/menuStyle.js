import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    background: "linear-gradient(90deg, #F3705A 0%, #FFD15C 100%)",
    width: "45%",
    height: "1.5em",
    paddingLeft: "3em",
    paddingRight: "3em",
    borderRadius: "20px 20px 20px 20px",
    listStyleType: "none",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  listItemLink: {
    color: "#FFFFFF",
    cursor: "pointer",
  },
}));

export default useStyles;
