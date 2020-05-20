import React, { useContext } from "react";

import flameImage from "../../../images/flame-image.svg";

import Typography from "@material-ui/core/Typography";

import useStyles from "../../../styles/subcomponents/navbar/logoStyle";
import ThemeContext from "../../../theme-context";

export default function Logo() {
  const classes = useStyles();
  const themes = useContext(ThemeContext);

  return (
    <div className={classes.logoBox}>
      <img alt="flame" src={flameImage} />
      <Typography style={themes} className={classes.logoText}>
        Flame
      </Typography>
    </div>
  );
}
