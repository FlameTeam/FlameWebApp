import React, { useState } from "react";
import axios from "axios";

import { Box, Grid, Typography } from "@material-ui/core";

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

  const [buttonState, setButton] = useState(true);
  const [buttonClickState, setButtonClick] = useState(false);

  const formState = {
    name: nameState,
    email: emailState,
    phone: phoneState,
    message: messageState,
  };

  const handleSubmit = async (event) => {
    console.log("\n[FlameWebApp][Contact][handleSubmit][Request]:", formState);

    event.preventDefault();
    await axios
      .post(
        "https://flame-mail-api-dot-flame-280910.rj.r.appspot.com/mail/sendMail",
        formState
      )
      .then(() =>
        console.log(
          "[FlameWebApp][Contact][handleSubmit][Done][Send]:",
          formState
        )
      )
      .catch((error) => {
        console.log("[FlameWebApp][Contact][handleSubmit][Error]:", error);
        console.log("[FlameWebApp][Contact][handleSubmit][Done]");
      });
  };

  const stateIsEmpty = (state) => {
    let isEmpty = false;
    for (let key in state) {
      if (state[key] === "") isEmpty = true;
    }
    return isEmpty;
  };

  const buttonClick = () => {
    setButtonClick(!buttonClickState);
    setButton(!buttonState);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Box className={classes.textFieldsBox}>
        <NameTextField
          formState={formState}
          setName={setName}
          setButton={setButton}
          stateIsEmpty={stateIsEmpty}
        />
        <Grid container justify="center">
          <Grid container justify="center" item xs={12} sm={6}>
            <EmailTextField
              formState={formState}
              setEmail={setEmail}
              setButton={setButton}
              stateIsEmpty={stateIsEmpty}
            />
          </Grid>
          <Grid container justify="center" item xs={12} sm={6}>
            <PhoneTextField
              formState={formState}
              setPhone={setPhone}
              setButton={setButton}
              stateIsEmpty={stateIsEmpty}
            />
          </Grid>
        </Grid>
        <MessageTextField
          formState={formState}
          setMessage={setMessage}
          setButton={setButton}
          stateIsEmpty={stateIsEmpty}
        />
        <FormButton type="submit" disabled={buttonState} onClick={buttonClick}>
          Enviar
        </FormButton>
        <Typography variant="body2" className={classes.formAction}>
          {buttonClickState === true ? "Mensaje enviado!" : ""}
        </Typography>
      </Box>
    </form>
  );
};

export default Form;
