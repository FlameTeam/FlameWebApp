import React, { useContext } from "react";

import { AppBar, Toolbar, Box } from "@material-ui/core";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";

import useStyles from "../styles/components/navbarStyle";
import ThemeContext from "../theme-context";

export default function Navbar() {
  const classes = useStyles();
  const themes = useContext(ThemeContext);

  console.log(themes);
  return (
    <AppBar className={classes.appbar} position="static" style={themes}>
      <Toolbar>
        <Box className={classes.navbarContainer}>
          <Logo />
          <Menu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
