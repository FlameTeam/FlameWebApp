import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../../../resources/styles/subcomponents/contact/textFieldStyle";

import { TextField } from "@material-ui/core";

const NameTextField = ({ nameState, setName }) => {
  const classes = useStyles();

  return (
    <TextField
      autoComplete="off"
      id="name"
      label="Nombre"
      value={nameState}
      onChange={(e) => setName(e.target.value)}
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
  nameState: PropTypes.string.isRequired,
  setName: PropTypes.func,
};
