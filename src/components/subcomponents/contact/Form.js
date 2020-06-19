import React, { useState } from "react";

import { Box, Grid } from "@material-ui/core";

import NameTextField from "./textfields/NameTextField";
import EmailTextField from "./textfields/EmailTextField";
import PhoneTextField from "./textfields/PhoneTextField";
import MessageTextField from "./textfields/MessageTextField";
import { FormButton } from "../../../resources/styles/subcomponents/header/buttonStyle";

import useStyles from "../../../resources/styles/subcomponents/contact/formStyle";

const Form = () => {
  const classes = useStyles();

  const [nameState, setName] = useState("");
  const [emailState, setEmail] = useState("");
  const [phoneState, setPhone] = useState("");
  const [messageState, setMessage] = useState("");

  // const formState = {
  //   nameState,
  //   emailState,
  //   phoneState,
  //   messageState,
  // };

  return (
    <form className={classes.form}>
      <Box className={classes.textFieldsBox}>
        <NameTextField nameState={nameState} setName={setName} />
        <Grid container justify="center">
          <Grid container justify="center" item xs={12} sm={6}>
            <EmailTextField emailState={emailState} setEmail={setEmail} />
          </Grid>
          <Grid container justify="center" item xs={12} sm={6}>
            <PhoneTextField phoneState={phoneState} setPhone={setPhone} />
          </Grid>
        </Grid>
        <MessageTextField messageState={messageState} setMessage={setMessage} />
        <FormButton>Enviar</FormButton>
      </Box>
    </form>
  );
};

export default Form;
