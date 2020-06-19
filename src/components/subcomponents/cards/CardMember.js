import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/subcomponents/cardStyle";
import { Grid, Typography } from "@material-ui/core";

export default function CardMember({ card, lastCard }) {
  const classes = useStyles();
  const roles = card.roles;
  const contacts = card.contact;

  let GridLargeBoxStyle;
  if (lastCard) {
    GridLargeBoxStyle = classes.gridLastBoxLarge;
  } else {
    GridLargeBoxStyle = classes.gridBoxLarge;
  }

  return (
    <Grid item xs={12} sm={5} className={GridLargeBoxStyle}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={4}>
          <img src={card.img} alt="Avatar" className={classes.personalImg} />
        </Grid>

        <Grid item xs={12} sm={12} md={8}>
          <Typography variant="h2" className={classes.firstTitle}>
            {" "}
            {card.title}{" "}
          </Typography>
          <Typography variant="h3" className={classes.secondTitle}>
            {card.subtitle}
          </Typography>
          {roles.map(function(role, i) {
            return (
              <Typography variant="h4" key={i} className={classes.thirdTitle}>
                {role.name}
              </Typography>
            );
          })}
          <Grid container justify="center">
            {contacts.map(function(contact, j) {
              return (
                <a key={j} href={contact.link}>
                  <img
                    src={contact.icon}
                    alt="icon"
                    className={classes.icon_img}
                  />
                </a>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

//Definiendo el objeto que debe llegar al componente
CardMember.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    contact: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }),
};
