import React from "react";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const NameTextField = () => {
  const classes = useStyles();

  return (
    <TextField
      autoComplete="off"
      id="name"
      label="Nombre"
      className={classes.textFieldName}
      InputProps={{
        classes: {
          underline: classes.underline,
          input: classes.input,
        },
      }}
    />
  );
};

export default NameTextField;
