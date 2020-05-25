// import React, { useContext } from "react";
import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Drawer,
  IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";

import useStyles from "../styles/components/navbarStyle";

export default function Navbar() {
  const classes = useStyles();
  const [drawerState, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerState);
  };

  const sideList = () => {
    return (
      <Drawer anchor="right" open={drawerState} onClose={toggleDrawer}>
        <Box
          className={classes.drawer}
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem
              onClick={toggleDrawer}
              className={classes.listLinkResponsive}
            >
              Inicio
            </ListItem>
            <ListItem
              onClick={toggleDrawer}
              className={classes.listLinkResponsive}
            >
              Servicios
            </ListItem>
            <ListItem
              onClick={toggleDrawer}
              className={classes.listLinkResponsive}
            >
              Contacto
            </ListItem>
            <ListItem
              onClick={toggleDrawer}
              className={classes.listLinkResponsive}
            >
              Nuestro Equipo
            </ListItem>
            <ListItem
              onClick={toggleDrawer}
              className={classes.listLinkResponsive}
            >
              Saber Más
            </ListItem>
          </List>
        </Box>
      </Drawer>
    );
  };

  return (
    <React.Fragment>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Box className={classes.navbarContainer}>
            <Logo />
            <Menu />
            <IconButton className={classes.menuButton} onClick={toggleDrawer}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {sideList()}
    </React.Fragment>
  );
}
