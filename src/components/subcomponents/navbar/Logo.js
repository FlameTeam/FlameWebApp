import React from "react";

import flameImage from "../../../images/flame-image.svg";

import Link from "@material-ui/core/Link";

import useStyles from "../../../styles/subcomponents/navbar/logoStyle";

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logoBox}>
      <img alt="flame" src={flameImage} />
      <Link className={classes.logoText}>Flame</Link>
    </div>
  );
}
