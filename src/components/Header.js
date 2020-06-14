import React from "react";

import { Grid, Button } from "@material-ui/core";
import { Link } from "react-scroll";

import GirlInDeskImage from "../images/girl-in-desk2.svg";

import useStyles from "../styles/components/headerStyle";

export default function Navbar() {
  const classes = useStyles();

  return (
    <Grid container className={classes.header} id="header">
      <Grid item xs={12} sm={4} md={5} lg={6} className={classes.imageGrid}>
        <img
          alt="girl-in-desk"
          src={GirlInDeskImage}
          className={classes.image}
        />
      </Grid>

      <Grid item xs={12} sm={8} md={7} lg={6}>
        <Grid container justify="center" alignItems="center">
          <h2 className={classes.title}>
            ¡Soluciones de Software hechas por un equipo!
          </h2>

          <Grid container className={classes.gridBoxesContainer}>
            <Grid
              item
              container
              alignItems="center"
              xs={12}
              sm={5}
              className={classes.gridBox}
            >
              <Grid container justify="center">
                <h3 className={classes.titleBox}>
                  ¿Buscas una solución tecnológica para tu negocio?
                </h3>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900}
                >
                  <Button className={classes.button}>Conocer Servicios</Button>
                </Link>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5}
              className={classes.gridBox}
              container
              alignItems="center"
            >
              <Grid container justify="center">
                <h3 className={classes.titleBox}>
                  ¿Te gustaría conocer sobre las tecnologías que utilizamos?
                </h3>
                <Button className={classes.button}>Revisar Blog</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
