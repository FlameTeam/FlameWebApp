import React from "react";
import { Link } from "react-scroll";

import { menuData } from "../../../resources/data/menuData";
import { Typography } from "@material-ui/core";

import useStyles from "../../../resources/styles/subcomponents/navbar/menuStyle";

export default function Menu() {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
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
              <li className={classes.listItemLink}>{listItem.content}</li>
            </Link>
          </Typography>
        );
      })}
    </ul>
  );
}
