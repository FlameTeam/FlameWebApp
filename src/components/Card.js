import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cards.css';

export default function Card({ card: { subtitle, img } }) {
  return (
    <div className="card">
      <img src={img} alt="Avatar" className="image" />
      <div className="container">
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};
