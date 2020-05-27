import React from "react";

import { Grid, Box } from "@material-ui/core";

import GirlInDeskImage from "../images/girl-in-desk.svg";

import useStyles from "../styles/components/headerStyle";

export default function Navbar() {
  const classes = useStyles();

  return (
        <Grid container className={classes.header}>
            <Grid item md={4} className={classes.imageGrid}>
                <img alt="girl-in-desk" src={GirlInDeskImage} className={classes.image}/>
            </Grid>

            <Grid item md={8}>
                <h2 className={classes.title}>Soluciones de Software hechas por un equipo!</h2>
                
                <Box ></Box>
            </Grid>
        </Grid>
    
  );
}
