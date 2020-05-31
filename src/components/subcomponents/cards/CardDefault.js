import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/subcomponents/cards/cardStyle";
import { Grid } from "@material-ui/core";

export default function CardDefault({ card }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={5} className={classes.gridBox}>
      <Grid container justify="center">
        <img src={card.img} alt="Avatar" className={classes.image} />
        <h3 className={classes.titleBox}>{card.subtitle}</h3>
      </Grid>
    </Grid>
  );
}

//Definiendo el objeto que debe llegar al componente
CardDefault.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};
