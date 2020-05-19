import React, { useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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
        <div className={classes.navbarContainer}>
          <Logo />
          <Menu />
        </div>
      </Toolbar>
    </AppBar>
  );
}
