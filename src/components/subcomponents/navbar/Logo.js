import React from "react";

import flameLogo from "../../../resources/images/Logo.svg";

import useStyles from "../../../resources/styles/subcomponents/navbar/logoStyle";

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoBox}>
      <img alt="flame" src={flameLogo} className={classes.image} />
    </div>
  );
}
