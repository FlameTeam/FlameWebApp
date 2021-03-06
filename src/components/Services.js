import React from 'react';

import useStyles from '../resources/styles/customStyle';
import { Grid, Typography } from '@material-ui/core';

import ServiceCard from './subcomponents/cards/ServiceCard.js';

import { servicesData } from '../resources/data/servicesData';

export function Services() {
  const classes = useStyles();

  return (
    <Grid container className={classes.services} id='services'>
      <Grid item style={{ width: '100%' }}>
        <Typography variant='h2' className={classes.title}>
          Nuestros Servicios
        </Typography>
        <Grid container className={classes.gridBoxesContainer}>
          {servicesData.map(function (card, i) {
            return <ServiceCard key={i} card={card} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
