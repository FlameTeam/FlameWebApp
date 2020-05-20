// import React, { useContext } from "react";
import React from "react";

import { AppBar, Toolbar, Box } from "@material-ui/core";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";

import useStyles from "../styles/components/navbarStyle";

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Box className={classes.navbarContainer}>
          <Logo />
          <Menu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
