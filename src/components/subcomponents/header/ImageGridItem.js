import React from "react";

import { Grid } from "@material-ui/core";

import GirlInDeskImage from "../../../resources/images/girl-in-desk.svg";

import useStyles from "../../../resources/styles/subcomponents/header/imageGridItemStyle";

export default function Header() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} md={5} lg={6} className={classes.imageGrid}>
      <img alt="girl-in-desk" src={GirlInDeskImage} className={classes.image} />
    </Grid>
  );
}
