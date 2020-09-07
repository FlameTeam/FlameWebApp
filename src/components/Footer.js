import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useCustomStyles from '../resources/styles/customStyle';
import columnStyles from '../resources/styles/subcomponents/footer/columnStyle';
import { Grid, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import BusinessIcon from '@material-ui/icons/Business';

import Column from './subcomponents/columns/Column';
import Errors from './subcomponents/Errors';

import { footerData } from '../resources/data/footerData';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#ffffff',
    marginRight: '-18px',
  },
}));

export function Footer({ error }) {
  const customClasses = useCustomStyles();
  const columnsClasses = columnStyles();
  const classes = useStyles();

  if (error) {
    return <Errors type={error} />;
  }

  return (
    <Grid container className={customClasses.gradientBackground} id='footer'>
      <Grid item style={{ width: '100%' }}>
        <Grid container className={customClasses.gridBoxesContainer}>
          {footerData.map(function (info, i) {
            return <Column key={info.id} info={info} />;
          })}

          <Grid item xs={10} sm={3} className={columnsClasses.gridLastBox}>
            <Grid container>
              <Typography variant='h3' className={columnsClasses.titleBox}>
                Contacto
              </Typography>
            </Grid>
            <hr className={columnsClasses.line} />
            <Grid container justify='center'>
              <PhoneAndroidIcon className={classes.icon} />
              <Typography className={columnsClasses.finalColumnFooter}>
                (9) 5733 2640
              </Typography>
            </Grid>
            <Grid container justify='center'>
              <MailIcon className={classes.icon} />
              <Typography className={columnsClasses.finalColumnFooter}>
                comercial@flamedev.cl
              </Typography>
            </Grid>
            <Grid container justify='center'>
              <BusinessIcon className={classes.icon} />
              <Typography className={columnsClasses.finalColumnFooter}>
                Huilliches 673, Quilicura, Chile
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
