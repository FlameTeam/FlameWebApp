import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/subcomponents/cards/cardStyle";

export default function Card({ card: { id, subtitle, img } }) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <img src={img} alt="Avatar" className={classes.image} />
      <div className={classes.container}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};
