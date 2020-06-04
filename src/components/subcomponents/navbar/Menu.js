import React from "react";

import Link from "@material-ui/core/Link";

import useStyles from "../../../styles/subcomponents/navbar/menuStyle";

export default function Menu() {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      <li>
        <Link className={classes.listItemLink}>Inicio</Link>
      </li>
      <li>
        <Link className={classes.listItemLink}>Servicios</Link>
      </li>
      <li>
        <Link className={classes.listItemLink}>Contacto</Link>
      </li>
      <li>
        <Link className={classes.listItemLink}>Nuestro Equipo</Link>
      </li>
      <li>
        <Link className={classes.listItemLink}>Saber Más</Link>
      </li>
    </ul>
  );
}
