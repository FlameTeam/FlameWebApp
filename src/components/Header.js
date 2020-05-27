import React from "react";

import { Grid, Box } from "@material-ui/core";

import GirlInDeskImage from "../images/girl-in-desk.svg";

import useStyles from "../styles/components/headerStyle";

export default function Navbar() {
  const classes = useStyles();

  return (
        <Grid container className={classes.header}>
            <Grid item xs={12} sm={4} md={5} className={classes.imageGrid}>
                <img alt="girl-in-desk" src={GirlInDeskImage} className={classes.image}/>
            </Grid>

            <Grid item xs={12} sm={8} md={7}>
                <h2 className={classes.title}>Soluciones de Software hechas por un equipo!</h2>
                <Grid container className={classes.gridBoxesContainer} >
                    <Grid item xs={12} sm={5} className={classes.gridItemBox}>
                        <Box>
                            CAJA 1
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} className={classes.gridItemBox}>
                        <Box>
                            CAJA 2  
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    
  );
}
