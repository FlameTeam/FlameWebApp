import React, { Fragment } from "react";

import { Grid } from "@material-ui/core";

import ImageGridItem from "./subcomponents/header/ImageGridItem";
import ContentGridItem from "./subcomponents/header/ContentGridItem";

import useStyles from "../resources/styles/sectionsStyle";

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.header} id="header">
        <ImageGridItem />
        <ContentGridItem />
      </Grid>
    </Fragment>
  );
}
