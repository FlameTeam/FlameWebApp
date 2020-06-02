import React from "react";
import useCustomStyles from "../styles/components/customStyle";
import { Grid } from "@material-ui/core";

import CardMember from "./subcomponents/cards/CardMember";
import Errors from "./subcomponents/Errors";

import { teamSection } from "../stories/ScreenSection.stories"; //json with data

export function Team({ error }) {
  const Customclasses = useCustomStyles();

  if (error) {
    return <Errors type={error} />;
  }

  return (
    <Grid container className={Customclasses.header}>
      <Grid item style={{ width: "100%" }}>
        <h2 className={Customclasses.title}>Nuestro Equipo</h2>
        <Grid container className={Customclasses.gridBoxesContainer}>
          {teamSection.map(function(card, i) {
            if (teamSection.length - 1 === i) {
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
