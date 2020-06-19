import React from "react";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const MessageTextField = () => {
  const classes = useStyles();

  return (
    <TextField
      autoComplete="off"
      id="message"
      label="Asunto"
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
  );
};

export default MessageTextField;
