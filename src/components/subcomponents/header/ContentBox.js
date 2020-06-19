import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import { Grid, Typography } from "@material-ui/core";
import { HeaderButton } from "../../../resources/styles/subcomponents/header/buttonStyle";

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

        <Link
          activeClass="active"
          to={content.link}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1100}
        >
          <HeaderButton>{content.buttonText}</HeaderButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default ContentBox;

ContentBox.propTypes = {
  content: PropTypes.object,
};
