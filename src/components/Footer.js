import React from 'react';
import useCustomStyles from "../styles/components/customStyle";
import { Grid } from "@material-ui/core";

import Column from './subcomponents/columns/Column';
import Errors from './subcomponents/Errors';

import { footerSection } from '../stories/ScreenSection.stories'; //json with data

export function Footer({ error }) {
  const Customclasses = useCustomStyles();

  if (error) { return(<Errors type={error} />) }

  return (
    <Grid container className={Customclasses.gradientBackground}>
      <Grid item style={{width:"100%"}}>
        <Grid container className={Customclasses.gridBoxesContainer}>
          {
            footerSection.map(info => (
            <Column key={info.id} info={info}/>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
