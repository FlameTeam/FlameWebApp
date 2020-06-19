import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/subcomponents/cardStyle";
import { Grid, Typography } from "@material-ui/core";

export default function ServiceCard({ card }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3} className={classes.gridBox}>
      <Grid container justify="center">
        <img src={card.img} alt="Avatar" className={classes.image} />
        <Typography className={classes.titleBox}>{card.subtitle}</Typography>
      </Grid>
    </Grid>
  );
}

ServiceCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};
