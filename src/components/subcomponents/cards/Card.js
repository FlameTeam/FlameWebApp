import React from 'react';
import PropTypes from 'prop-types';
import useStyles from "../../../styles/subcomponents/cards/cardStyle";
import { Grid } from "@material-ui/core";


export default function Card({ type, card }) {
  const classes = useStyles();

  if (type==='default') {
    return (
      <Grid item xs={12} sm={5} className={classes.gridBox}>
          <Grid container justify="center">
              <img src={card.img} alt="Avatar" className={classes.image} />
              <h3 className={classes.titleBox}>{card.subtitle}</h3>
          </Grid>
      </Grid>
    );
  }

  if (type==='member') {
    return (
      <Grid item xs={12} sm={5} className={classes.gridBoxLarge}>
          <Grid container justify="center">
            <Grid item xs={12} sm={4} md={4}>
              <img src={card.img} alt="Avatar" className={classes.personalImg} />
            </Grid>

            <Grid item xs={12} sm={8} md={8}>
              <h2 className={classes.firstTitle}> {card.title} </h2>
              <h3 className={classes.secondTitle}>{card.subtitle}</h3>
              <h4 className={classes.thirdTitle}>{card.roles.primero}</h4>
              <h4 className={classes.thirdTitle}>{card.roles.segundo}</h4>
              <Grid container justify="center">
              <img src={card.github_icon} alt="icon" className={classes.icon_img} />
                  <img src={card.linkedin_icon} alt="icon" className={classes.icon_img} />
              </Grid>
            </Grid>

          </Grid>
      </Grid>
    );
  }

}

Card.propTypes = {
  card: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })
};
