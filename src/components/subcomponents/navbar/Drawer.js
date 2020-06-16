import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import { menuData } from "../../../resources/data/menuData";

import { Box, ListItem, List, Typography } from "@material-ui/core";
import MaterialUIDrawer from "@material-ui/core/Drawer";

import useStyles from "../../../resources/styles/subcomponents/navbar/drawerStyle";

const Drawer = ({ drawerState, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <MaterialUIDrawer anchor="right" open={drawerState} onClose={toggleDrawer}>
      <Box
        className={classes.drawer}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {menuData.map((listItem, i) => {
            return (
              <Typography key={i}>
                <Link
                  activeClass="active"
                  to={listItem.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1100}
                >
                  <ListItem
                    onClick={toggleDrawer}
                    className={classes.drawerLink}
                  >
                    {listItem.content}
                  </ListItem>
                </Link>
              </Typography>
            );
          })}
        </List>
      </Box>
    </MaterialUIDrawer>
  );
};

export default Drawer;

Drawer.propTypes = {
  drawerState: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func,
};
