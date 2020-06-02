import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../styles/subcomponents/cardStyle";
import { Grid } from "@material-ui/core";

export default function CardMember({ card }) {
  const classes = useStyles();
  const roles= card.roles;
  const contacts= card.contact;

  return (
    <Grid item xs={12} sm={5} className={classes.gridBoxLarge}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={4}>
            <img src={card.img} alt="Avatar" className={classes.personalImg} />
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <h2 className={classes.firstTitle}> {card.title} </h2>
            <h3 className={classes.secondTitle}>{card.subtitle}</h3>
            {
              roles.map(function(role, i){
                return <h4 key={i} className={classes.thirdTitle}>{role.name}</h4>;
              })
            }
            <Grid container justify="center">
              {
                contacts.map(function(contact, j){
                  return <img key={j} src={contact.icon} alt="icon" href={contact.link} className={classes.icon_img} />;
                })
              }
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
    roles: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })),
    contact: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }))
  }),
};
