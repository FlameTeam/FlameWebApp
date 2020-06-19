import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const EmailTextField = ({ emailState, setEmail }) => {
  const classes = useStyles();

  return (
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
  );
};

export default EmailTextField;

EmailTextField.propTypes = {
  emailState: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
};
