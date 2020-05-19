import React from "react";

import { List, ListItem } from "@material-ui/core";

import useStyles from "../../../styles/subcomponents/navbar/menuStyle";

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.menuContainer}>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>Inicio</ListItem>
        <ListItem className={classes.listItem}>Servicios</ListItem>
        <ListItem className={classes.listItem}>Proyectos</ListItem>
        <ListItem className={classes.listItem}>Blog</ListItem>
        <ListItem className={classes.listItem}>Contacto</ListItem>
      </List>
    </div>
  );
}
