import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/subcomponents/columnStyle";
import { Grid, Link } from "@material-ui/core";

export default function Column({ type, info, lastColumn }) {
  const classes = useStyles();
  const subtitles = info.subtitles;

  return (
    <Grid item xs={10} sm={3} className={classes.gridBox}>
      <Grid container>
        <h3 className={classes.titleBox}>{info.title}</h3>
      </Grid>
      <hr className={classes.line} />
      {subtitles.map(function(subtitle, i) {
        return (
          <Grid container justify="center" key={i}>
            <Link href={subtitle.link} className={classes.subtitlesBox}>
              {subtitle.name}
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

Column.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }),
};
