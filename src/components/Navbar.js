import React, { Fragment, useState } from "react";

import { AppBar, Toolbar, Grid } from "@material-ui/core";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";
import HamburgerMenu from "./subcomponents/navbar/HamburgerMenu";
import Drawer from "./subcomponents/navbar/Drawer";

import useStyles from "../resources/styles/sectionsStyle";

export default function Navbar() {
  const classes = useStyles();
  const [drawerState, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerState);
  };

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.navbar}>
          <Grid container alignItems="center">
            <Grid item xs={10} md={5}>
              <Logo />
            </Grid>
            <Grid item xs={2} md={7}>
              <Menu />
              <HamburgerMenu toggleDrawer={toggleDrawer} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
    </Fragment>
  );
}
