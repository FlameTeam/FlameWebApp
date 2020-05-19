import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",

    border: "1px solid red",
  },

  listItem: {
    color: "red",

    border: "1px solid red",
  },
}));

export default useStyles;
