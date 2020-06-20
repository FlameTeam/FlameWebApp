import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const PhoneTextField = ({ formState, setPhone, stateIsEmpty, setButton }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setPhone(e.target.value);

    if (stateIsEmpty(formState) === false) {
      setButton(false);
    }
  };

  return (
    <TextField
      margin="dense"
      autoComplete="off"
      id="phone"
      label="Teléfono"
      value={formState.phone}
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

export default PhoneTextField;

PhoneTextField.propTypes = {
  formState: PropTypes.object.isRequired,
  setPhone: PropTypes.func,
  setButton: PropTypes.func.isRequired,
  stateIsEmpty: PropTypes.func.isRequired,
};
