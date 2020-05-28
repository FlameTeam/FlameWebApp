import React, { useState } from "react";

import { Box, Grid, TextField, Button } from "@material-ui/core";

import useStyles from "../styles/components/contactStyle";

export default function Contact() {
  const classes = useStyles();

  const [nameState, setName] = useState("");
  const [emailState, setEmail] = useState("");
  const [phoneState, setPhone] = useState("");
  const [messageState, setMessage] = useState("");

  console.log(nameState);
  console.log(emailState);
  console.log(phoneState);
  console.log(messageState);

  return (
    <Box className={classes.contact}>
      <h3 className={classes.title}>Contacto</h3>

      <form className={classes.form}>
        <Box className={classes.textFieldsBox}>
          <TextField
            id="name"
            label="Nombre"
            value={nameState}
            onChange={(e) => setName(e.target.value)}
          />

          <Box className={classes.emailPhoneTextFieldBox}>
            <TextField
              id="email"
              label="Email"
              value={emailState}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="phone"
              label="Teléfono"
              value={phoneState}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>

          <TextField
            id="message"
            label="Asunto"
            value={messageState}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button variant="contained">Enviar</Button>
        </Box>
      </form>
    </Box>
  );
}
