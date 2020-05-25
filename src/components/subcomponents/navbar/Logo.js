import React from "react";

import flameImage from "../../../images/flame-logo.svg";

import useStyles from "../../../styles/subcomponents/navbar/logoStyle";

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoBox}>
      <img alt="flame" src={flameImage} />
      <h1 className={classes.logoText}>Flame</h1>
    </div>
  );
}
