import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const MessageTextField = ({ messageState, setMessage }) => {
  const classes = useStyles();

  return (
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
  );
};

export default MessageTextField;

MessageTextField.propTypes = {
  messageState: PropTypes.string.isRequired,
  setMessage: PropTypes.func,
};
