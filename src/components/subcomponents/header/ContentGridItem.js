import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { contentBoxData } from "../../../resources/data/header/contentBoxData";

import ContentBox from "./ContentBox";

import useStyles from "../../../resources/styles/subcomponents/header/contentGridItemStyles";

export default function ContentGridItem() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={7} lg={6}>
      <Typography variant="h1" className={classes.title}>
        ¡Soluciones de Software hechas por un equipo!
      </Typography>

      <Grid container justify="center">
        {contentBoxData.map((content, i) => {
          return <ContentBox key={i} content={content} />;
        })}
      </Grid>
    </Grid>
  );
}
