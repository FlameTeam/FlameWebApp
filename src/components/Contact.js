import React, { useState } from "react";
import axios from "axios";

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

  const [buttonState, setButton] = useState(false);

  const state = {
    nameState,
    emailState,
    phoneState,
    messageState,
  };

  const handleClick = () => {
    setButton(true);
  };

  const handleSubmit = async (event) => {
    console.log("\n[FlameWebApp][Contact][handleSubmit][Request]:", state);

    event.preventDefault();
    await axios
      .post("https://flame-280323.ue.r.appspot.com/mail/sendMail", state)
      .then(() =>
        console.log("[FlameWebApp][Contact][handleSubmit][Done][Send]:", state)
      )
      .catch((error) => {
        console.log("[FlameWebApp][Contact][handleSubmit][Error]:", error);
        console.log("[FlameWebApp][Contact][handleSubmit][Done]");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.contact} id="contact">
        <h3 className={classes.title}>Contacto</h3>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Box className={classes.textFieldsBox}>
            <TextField
              autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
              autoComplete="off"
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

            <Button
              type="submit"
              className={classes.button}
              onClick={handleClick}
              disabled={buttonState}
            >
              Enviar
            </Button>
            <p className={classes.formAction}>
              {buttonState === true ? "Mensaje enviado!" : ""}
            </p>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
}
