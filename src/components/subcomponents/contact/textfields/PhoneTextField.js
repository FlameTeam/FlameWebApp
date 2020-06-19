import React from "react";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const PhoneTextField = () => {
  const classes = useStyles();

  return (
    <TextField
      autoComplete="off"
      id="phone"
      label="Teléfono"
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

export default PhoneTextField;
