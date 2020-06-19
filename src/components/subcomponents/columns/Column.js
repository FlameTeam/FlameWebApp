import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../resources/styles/subcomponents/footer/columnStyle";
import { Grid, Typography, Link } from "@material-ui/core";

export default function Column({ type, info }) {
  const classes = useStyles();
  const subtitles = info.subtitles;

  return (
    <Grid item xs={10} sm={3} className={classes.gridBox}>
      <Grid container>
        <Typography variant="h3" className={classes.titleBox}>
          {info.title}
        </Typography>
      </Grid>
      <hr className={classes.line} />
      {subtitles.map(function(subtitle, i) {
        return (
          <Grid container justify="center" key={i}>
            <Link href={subtitle.link} className={classes.subtitlesBox}>
              <Typography>{subtitle.name}</Typography>
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
