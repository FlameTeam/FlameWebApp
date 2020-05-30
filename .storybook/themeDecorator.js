import React from "react";
import ContrailOne from 'typeface-contrail-one';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily:
      "Contrail One",
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ContrailOne],
      },
    },
  },
});

const Theme  = storyFn => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
);

export default Theme;
