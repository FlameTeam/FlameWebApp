import React, { useState } from "react";

import {
  createMuiTheme,
  ThemeProvider,
  Box,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import useStyles from "../styles/components/contactStyle";

const theme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        marginTop: "-10px",
        marginLeft: "1em",
        fontSize: "1.1em",
        color: "#FFFFFF",
        fontFamily: "Contrail One",
        "&$focused": {
          color: "#FFFFFF",
        },
      },
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <Box className={classes.contact}>
        <h3 className={classes.title}>Contacto</h3>

        <form className={classes.form}>
          <Box className={classes.textFieldsBox}>
            <TextField
              id="name"
              label="Nombre"
              value={nameState}
              onChange={(e) => setName(e.target.value)}
              className={classes.textFieldName}
              InputProps={{
                classes: {
                  underline: classes.underline,
                  input: classes.input,
                },
              }}
            />

            <Grid
              container
              justify="center"
              className={classes.emailPhoneTextFieldGrid}
            >
              <Grid container justify="center" item xs={12} sm={6}>
                <TextField
                  id="email"
                  label="Email"
                  value={emailState}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.textFieldEmailPhone}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                      input: classes.input,
                    },
                  }}
                />
              </Grid>
              <Grid container justify="center" item xs={12} sm={6}>
                <TextField
                  id="phone"
                  label="Teléfono"
                  value={phoneState}
                  onChange={(e) => setPhone(e.target.value)}
                  className={classes.textFieldEmailPhone}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                      input: classes.input,
                    },
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              id="message"
              label="Asunto"
              value={messageState}
              onChange={(e) => setMessage(e.target.value)}
              className={classes.textFieldMessage}
              multiline
              rows={3}
              InputProps={{
                classes: {
                  underline: classes.underline,
                  input: classes.input,
                },
              }}
            />

            <Button className={classes.button}>Enviar</Button>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
}
