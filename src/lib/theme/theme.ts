'use client';

import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2aa9ff',
    },
    secondary: {
      main: '#12304b',
      // main: '#00ff99',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        style: {padding: '8px 24px', color: '#fafafa'},
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },

    MuiStack: {
      defaultProps: {
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    MuiTypography: {
      defaultProps: {
        color: '#424242',
      },
    },
  },
});
