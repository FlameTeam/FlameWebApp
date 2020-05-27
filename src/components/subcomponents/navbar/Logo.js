import React from "react";

import { Typography } from '@material-ui/core';
import flameImage from "../../../images/flame-logo.svg";

import useStyles from "../../../styles/subcomponents/navbar/logoStyle";

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoBox}>
      <img alt="flame" src={flameImage} />
      <Typography className={classes.logoText}>Flame</Typography>
    </div>
  );
}
