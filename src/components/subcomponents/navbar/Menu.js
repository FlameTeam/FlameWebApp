import React from "react";

import { Link } from "react-scroll";

import useStyles from "../../../styles/subcomponents/navbar/menuStyle";

export default function Menu() {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        className={classes.scrollLink}
      >
        <li className={classes.listItemLink}>Inicio</li>
      </Link>

      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        className={classes.scrollLink}
      >
        <li className={classes.listItemLink}>Servicios</li>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        className={classes.scrollLink}
      >
        <li className={classes.listItemLink}>Contacto</li>
      </Link>
      <Link
        activeClass="active"
        to="team"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        className={classes.scrollLink}
      >
        <li className={classes.listItemLink}>Nuestro Equipo</li>
      </Link>
      <Link
        activeClass="active"
        to="footer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        className={classes.scrollLink}
      >
        <li className={classes.listItemLink}>Saber Más</li>
      </Link>
    </ul>
  );
}
