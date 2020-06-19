import React from "react";
import useCustomStyles from "../resources/styles/customStyle";
import columnStyles from "../styles/subcomponents/columnStyle";
import { Grid } from "@material-ui/core";

import Column from "./subcomponents/columns/Column";
import Errors from "./subcomponents/Errors";

import { footerSection } from "../stories/ScreenSection.stories"; //json with data

export function Footer({ error }) {
  const customClasses = useCustomStyles();
  const columnsClasses = columnStyles();

  if (error) {
    return <Errors type={error} />;
  }

  return (
    <Grid container className={customClasses.gradientBackground} id="footer">
      <Grid item style={{ width: "100%" }}>
        <Grid container className={customClasses.gridBoxesContainer}>
          {footerSection.map(function(info, i) {
            return <Column key={info.id} info={info} />;
          })}

          <Grid item xs={10} sm={3} className={columnsClasses.gridLastBox}>
            <Grid container>
              <h3 className={columnsClasses.titleBox}>Contacto</h3>
            </Grid>
            <hr className={columnsClasses.line} />
            <Grid container justify="center">
              <p className={columnsClasses.finalColumnFooter}>
                Celular: 9 46200158
              </p>
            </Grid>
            <Grid container justify="center">
              <p className={columnsClasses.finalColumnFooter}>
                Email: dixon.ortizc@gmail.com
              </p>
            </Grid>
            <Grid container justify="center">
              <p className={columnsClasses.finalColumnFooter}>
                Santiago de Chile, 2020
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
