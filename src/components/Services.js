import React from 'react';
import useCustomStyles from "../styles/components/customStyle";
import { Grid } from "@material-ui/core";

import CardDefault from './subcomponents/cards/CardDefault';
import Errors from './subcomponents/Errors';

import { serviceSection } from '../stories/ScreenSection.stories'; //json with data

export function Services({ error }) {
  const Customclasses = useCustomStyles();

  if (error) { return(<Errors type={error} />) }

  return (
    <Grid container className={Customclasses.header}>
      <Grid item style={{width:"100%"}}>
        <h2 className={Customclasses.title}>Nuestros Servicios</h2>
        <Grid container className={Customclasses.gridBoxesContainer}>
          {
            serviceSection.map(function(card, i){
              return <CardDefault key={i} card={card}/>;
              })
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
