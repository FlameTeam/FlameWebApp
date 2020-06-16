import React from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "../../../resources/styles/subcomponents/navbar/hamburgerMenuStyle";

const HamburgerMenu = ({ toggleDrawer }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.hamburgerMenu} onClick={toggleDrawer}>
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  toggleDrawer: PropTypes.func,
};
