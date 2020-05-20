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
        <Link className={classes.listItemLink}>Proyectos</Link>
      </li>
      <li>
        <Link className={classes.listItemLink}>Blog</Link>
      </li>
      <li>
        <Link className={classes.listItemLink}>Contacto</Link>
      </li>
    </ul>
  );
}
