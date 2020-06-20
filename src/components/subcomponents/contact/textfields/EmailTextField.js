import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const EmailTextField = ({ formState, setEmail, setButton, stateIsEmpty }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setEmail(e.target.value);

    if (stateIsEmpty(formState) === false) {
      setButton(false);
    }
  };

  return (
    <TextField
      margin="dense"
      autoComplete="off"
      id="email"
      label="Email"
      value={formState.email}
      onChange={handleChange}
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

EmailTextField.propTypes = {
  formState: PropTypes.object.isRequired,
  setEmail: PropTypes.func.isRequired,
  setButton: PropTypes.func.isRequired,
  stateIsEmpty: PropTypes.func.isRequired,
};
