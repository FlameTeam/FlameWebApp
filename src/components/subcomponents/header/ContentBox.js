import React from "react";
import PropTypes from "prop-types";

import { Grid, Button, Typography } from "@material-ui/core";

import useStyles from "../../../resources/styles/subcomponents/header/contentBoxStyle";

const ContentBox = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      alignItems="center"
      xs={12}
      sm={5}
      className={classes.gridBox}
    >
      <Grid container justify="center">
        <Typography variant="h2" className={classes.titleBox}>
          {content.title}
        </Typography>

        <Button className={classes.button}>{content.buttonText}</Button>
      </Grid>
    </Grid>
  );
};

export default ContentBox;

ContentBox.propTypes = {
  content: PropTypes.object,
};
