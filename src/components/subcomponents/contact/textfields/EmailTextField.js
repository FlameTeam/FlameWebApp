import React from "react";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const EmailTextField = () => {
  const classes = useStyles();

  return (
    <TextField
      autoComplete="off"
      id="email"
      label="Email"
      className={classes.textFieldEmailPhone}
      InputProps={{
        classes: {
          underline: classes.underline,
          input: classes.input,
        },
      }}
    />
  );
};

export default EmailTextField;
