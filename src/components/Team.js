import React from "react";
import useCustomStyles from "../resources/styles/customStyle";
import { Grid, Typography } from "@material-ui/core";

import CardMember from "./subcomponents/cards/CardMember";
import Errors from "./subcomponents/Errors";

import { teamData } from "../resources/data/teamData";

export function Team({ error }) {
  const Customclasses = useCustomStyles();

  if (error) {
    return <Errors type={error} />;
  }

  return (
    <Grid container className={Customclasses.header} id="team">
      <Grid item style={{ width: "100%" }}>
        <Typography variant="h2" className={Customclasses.title}>
          Nuestro Equipo
        </Typography>
        <Grid container className={Customclasses.gridBoxesContainer}>
          {teamData.map(function(card, i) {
            if (teamData.length - 1 === i) {
              return <CardMember key={i} card={card} lastCard={true} />;
            }
            return <CardMember key={i} card={card} lastCard={false} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Team;
