import React from "react";

import flameImage from "../../images/flame-image.svg";

import Typography from "@material-ui/core/Typography";

import useStyles from "../../../styles/subcomponents/navbar/logoStyle";

export default function Logo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img alt="flame" src={flameImage} />
      <Typography className={classes.logoText}>Flame</Typography>
    </React.Fragment>
  );
}
