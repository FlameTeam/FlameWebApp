import React from 'react';
import Card from './Card';
import useStyles from "../../../styles/subcomponents/cards/cardStyle";

function CardSection({ cards }) {
  const classes = useStyles();

  const NoData = (
    <div className={classes.card}>
      <img src="img/team.png" alt="Avatar" className={classes.image} />
      <div className={classes.container}>
        <span className={classes.glowText}>
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </div>
  );

  if (cards.length === 0) {
    return (
      <div className={classes.cards}>
        {NoData}
        {NoData}
        {NoData}
      </div>
    )
  }

  return (
    <div className={classes.cards}>
      {cards.map(card => (
        <Card key={card.id} card={card}/>
      ))}
    </div>
  );
}

export default CardSection;
