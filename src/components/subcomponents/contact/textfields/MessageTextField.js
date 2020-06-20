import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const MessageTextField = ({
  formState,
  setButton,
  stateIsEmpty,
  setMessage,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setMessage(e.target.value);

    if (stateIsEmpty(formState) === false) {
      setButton(false);
    }
  };

  return (
    <TextField
      margin="dense"
      autoComplete="off"
      id="message"
      label="Asunto"
      value={formState.message}
      onChange={handleChange}
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
  setMessage: PropTypes.func,
  formState: PropTypes.object.isRequired,
  setButton: PropTypes.func.isRequired,
  stateIsEmpty: PropTypes.func.isRequired,
};
