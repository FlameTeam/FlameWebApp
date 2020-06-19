import React from "react";

import { Typography, Box } from "@material-ui/core";

import Form from "./subcomponents/contact/Form";

import useStyles from "../resources/styles/sectionsStyle";

export default function Contact() {
  const classes = useStyles();

  return (
    <Box className={classes.contact} id="contact">
      <Typography variant="h2" className={classes.contactTitle}>
        Contacto
      </Typography>
      <Form />
    </Box>
  );
}
