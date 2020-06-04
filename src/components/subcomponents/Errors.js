import React from 'react';
import PropTypes from 'prop-types';

export function Errors({ type }) {
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

Errors.propTypes = {
  type: PropTypes.string,
};

export default Errors;
