import React from 'react';

import Card from './Card';
import '../styles/cards.css';

function CardSection({ cards }) {

  const NoData = (
    <div className="column">
      <div className="card loading-item">
        <span className="glow-text">
          <img src="img/team.png" alt="Avatar" className="image" />
        </span>
        <div className="container">
          <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
          </span>
        </div>
      </div>
    </div>
  );

  if (cards.length === 0) {
    return (
      <div className="row">
        {NoData}
        {NoData}
        {NoData}
      </div>
    )
  }

  return (
    <div className="row">
      {cards.map(card => (
        <div className="column">
          <Card key={card.id} card={card}/>
        </div>
      ))}
    </div>
  );
}

export default CardSection;
