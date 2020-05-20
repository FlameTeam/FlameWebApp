import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    background: "linear-gradient(90deg, #F3705A 0%, #FFD15C 100%)",
    width: "40%",
    height: "1.5em",
    paddingLeft: "3em",
    paddingRight: "3em",
    borderRadius: "20px 20px 20px 20px",
    listStyleType: "none",
  },

  listItemLink: {
    color: "#FFFFFF",
    cursor: "pointer",
  },
}));

export default useStyles;
