import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const NameTextField = ({ setName, setButton, stateIsEmpty, formState }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setName(e.target.value);

    if (stateIsEmpty(formState) === false) {
      setButton(false);
    }
  };

  return (
    <TextField
      margin="dense"
      autoComplete="off"
      id="name"
      label="Nombre"
      value={formState.name}
      onChange={handleChange}
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

NameTextField.propTypes = {
  formState: PropTypes.object.isRequired,
  setName: PropTypes.func.isRequired,
  setButton: PropTypes.func.isRequired,
  stateIsEmpty: PropTypes.func.isRequired,
};
