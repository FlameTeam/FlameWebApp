import React from 'react';
import PropTypes from 'prop-types';

import CardSection from './CardSection';
import { defaultCards } from '../stories/CardSection.stories';

export function ServiceSection({ error }) {
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
    <section id="servicios" className="service-section py-7">
      <nav>
        <h1>
          <span className="title-wrapper">Nuestros Servicios</span>
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
