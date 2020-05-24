import React from 'react';
import PropTypes from 'prop-types';
import useStyles from "../styles/components/serviceStyle";

import CardSection from './subcomponents/cards/CardSection';
import { serviceSection } from '../stories/CardSection.stories'; //json with data
import { teamSection } from '../stories/CardSection.stories'; //json with data

export function ScreenSection({ error, type }) {
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

  if (type==="service") {
    return (
      <section id="servicios" className={classes.serviceSection}>
        <nav>
          <h1>
            <span className={classes.titleWrapper}>Nuestros Servicios</span>
          </h1>
        </nav>
        <CardSection type="default" cards={serviceSection} />
      </section>
    );
  }

  if (type==="team") {
    return (
      <section id="equipo" className={classes.serviceSection}>
        <nav>
          <h1>
            <span className={classes.titleWrapper}>Nuestro Equipo</span>
          </h1>
        </nav>
        <CardSection type="member" cards={teamSection} />
      </section>
    );
  }


}

ScreenSection.propTypes = {
  error: PropTypes.string,
};

export default ScreenSection;
