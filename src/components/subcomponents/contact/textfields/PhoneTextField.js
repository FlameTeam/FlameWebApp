import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const PhoneTextField = ({ phoneState, setPhone }) => {
  const classes = useStyles();

  return (
    <TextField
      margin="dense"
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
  );
};

export default PhoneTextField;

PhoneTextField.propTypes = {
  phoneState: PropTypes.string.isRequired,
  setPhone: PropTypes.func,
};
