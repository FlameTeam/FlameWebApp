import React from 'react';
import PropTypes from 'prop-types';
import useStyles from "../../../styles/subcomponents/cards/cardStyle";

export default function Card({ type, card }) {
  const classes = useStyles();

  if (type==='default') {
    return (
      <div className={classes.card}>
        <img src={card.img} alt="Avatar" className={classes.image} />
        <div className={classes.container}>
          <p>{card.subtitle}</p>
        </div>
      </div>
    );
  }

  if (type==='member') {
    return (
      <div className={classes.second_card}>
        <div className={classes.row}>
          <div className={classes.left}>
            <img src={card.img} alt="Avatar" className={classes.personal_image} />
          </div>
          <div className={classes.right}>
            <div className={classes.second_container}>
              <div className={classes.firstTitle}>{card.title}</div>
              <div className={classes.secondTitle}>{card.subtitle}</div>
              <div className={classes.thirdTitle}>{card.roles.primero}</div>
              <div className={classes.thirdTitle}>{card.roles.segundo}</div>
              <img src={card.github_icon} alt="icon" className={classes.icon_img} />
              <img src={card.linkedin_icon} alt="icon" className={classes.icon_img} />

            </div>
          </div>
        </div>
      </div>
    );
  }

}

Card.propTypes = {
  card: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};
