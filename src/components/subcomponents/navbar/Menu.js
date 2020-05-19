import React from "react";

import useStyles from "../../../styles/subcomponents/navbar/menuStyle";

export default function Menu() {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      <li alignItems="center" className={classes.listItem}>
        Inicio
      </li>
      <li className={classes.listItem}>Servicios</li>
      <li className={classes.listItem}>Proyectos</li>
      <li className={classes.listItem}>Blog</li>
      <li className={classes.listItem}>Contacto</li>
    </ul>
  );
}
