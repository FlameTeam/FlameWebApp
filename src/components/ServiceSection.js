import React from "react";
import PropTypes from "prop-types";
import useStyles from "../styles/components/serviceStyle";

import CardSection from "./subcomponents/cards/CardSection";
import { defaultCards } from "../stories/CardSection.stories";

export function ServiceSection({ error }) {
  const classes = useStyles();

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Algo va mal</div>
        </div>
      </div>
    );
  }

  return (
    <section id="servicios" className={classes.serviceSection}>
      <nav>
        <h1>
          <span className={classes.titleWrapper}>Nuestros Servicios</span>
        </h1>
      </nav>
      <CardSection cards={defaultCards} />
    </section>
  );
}

ServiceSection.propTypes = {
  error: PropTypes.string,
};

export default ServiceSection;
