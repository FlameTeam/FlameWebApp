import React from 'react';
import PropTypes from 'prop-types';
import useStyles from "../styles/components/serviceStyle";
import { Grid } from "@material-ui/core";

import CardSection from './subcomponents/cards/CardSection';
import { serviceSection } from '../stories/CardSection.stories'; //json with data
import { teamSection } from '../stories/CardSection.stories'; //json with data

export function ScreenSection({ error, type }) {
  const classes = useStyles();
  let cardType,title, cards="";

  if (type==="service"){
    title="Nuestros servicios";
    cardType="default";
    cards=serviceSection;
  }
  if (type==="team"){
    title="Nuestro equipo";
    cardType="member";
    cards=teamSection;
  }

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
    <Grid container className={classes.header}>
        <Grid item style={{width:"100%"}}>
              <h2 className={classes.title}>{title}</h2>
              <CardSection type={cardType} cards={cards} />

        </Grid>
    </Grid>
  );

}

ScreenSection.propTypes = {
  error: PropTypes.string,
};

export default ScreenSection;
