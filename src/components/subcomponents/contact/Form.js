import React from "react";

import { Box, Grid } from "@material-ui/core";

import NameTextField from "./textfields/NameTextField";
import EmailTextField from "./textfields/EmailTextField";
import PhoneTextField from "./textfields/PhoneTextField";
import MessageTextField from "./textfields/MessageTextField";
import { FormButton } from "../../../resources/styles/subcomponents/header/buttonStyle";

import useStyles from "../../../resources/styles/subcomponents/contact/formStyle";

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <Box className={classes.textFieldsBox}>
        <NameTextField />
        <Grid container justify="center">
          <Grid container justify="center" item xs={12} sm={6}>
            <EmailTextField />
          </Grid>
          <Grid container justify="center" item xs={12} sm={6}>
            <PhoneTextField />
          </Grid>
        </Grid>
        <MessageTextField />
        <FormButton>Enviar</FormButton>
      </Box>
    </form>
  );
};

export default Form;
