import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    background:
      "linear-gradient(180.36deg, #EB3333 0.7%, #EB3433 0.71%, #F45C43 99.35%)",
    height: "600px",
  },

  title: {
    marginTop: "0",
    marginBottom: "0.2em",
    paddingTop: "1em",
    paddingLeft: "1em",
    fontSize: "2.7em",
    fontWeight: "normal",
    color: "#FFFFFF",
  },

  formGridContainer: {
    marginLeft: "3em",
    marginRight: "3em",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em",
      marginRight: "1em",
    },
  },

  form: {
    background: "#F14F3D",
    width: "50%",
    margin: "auto",
    padding: "2em",
    border: "1px solid #FA3535",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",
  },

  textFieldsBox: {
    display: "flex",
    flexDirection: "column",
  },

  emailPhoneTextFieldBox: {
    display: "flex",
    justifyContent: "space-between",
  },

  formGridItem: {},

  textField: {
    width: "35%",
    margin: "1em",
    [theme.breakpoints.down("sm")]: {
      height: 30,
      width: "70%",
      fontSize: "0.7em",
    },
  },

  label: {
    "&$focusedLabel": {
      color: "#00EAA6",
    },
    color: "#00EAA6",
    fontSize: "15px",
  },

  underline: {
    color: "#FFFFFF",

    "&:before": {
      borderBottom: "1px solid white",
    },

    "&&&&:hover:before": {
      borderBottom: "1px solid white",
    },

    "&:after": {
      borderBottom: `1px solid cyan`,
    },
  },
}));

export default useStyles;
