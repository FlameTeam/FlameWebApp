import React from "react";

import { Grid, Button } from "@material-ui/core";

import GirlInDeskImage from "../images/girl-in-desk2.svg";

import useStyles from "../styles/components/headerStyle";

export default function Navbar() {
  const classes = useStyles();

  return (
        <Grid container className={classes.header}>
            <Grid item xs={12} sm={4} md={5} className={classes.imageGrid}>
                <img alt="girl-in-desk" src={GirlInDeskImage} className={classes.image}/>
            </Grid>

            <Grid item xs={12} sm={8} md={7}>
                <Grid container alignItems="center">
                <h2 className={classes.title}>¡Soluciones de Software hechas por un equipo!</h2>
                <Grid container className={classes.gridBoxesContainer} >
                   
                    <Grid item xs={12} sm={5} className={classes.gridBox}>
                        <Grid container justify="center"> 
                            <h3 className={classes.titleBox}>¿Buscas una solución tecnológica para tu negocio?</h3>
                            <Button className={classes.button}>Consultar Servicios</Button>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={5} className={classes.gridBox}>
                            <Grid container alignItems="center" justify="center"> 
                                <h3 className={classes.titleBox}>¿Te gustaría conocer sobre las tecnologías que utilizamos?</h3>
                                <Button className={classes.button}>Revisar Blog</Button>
                            </Grid>
                    </Grid>
               
                </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    
  );
}
