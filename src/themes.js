import { yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material';

// Default light theme
// export const theme = createTheme();

// A custom theme for this app
export const theme = createTheme({
  palette: {
    // mode: 'light',
    primary: {
      light: '#35baf6',
      main: '#03a9f4',
      dark: '#0276aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
      contrastText: '#000',
    },
    error: {
      main: yellow[900],
    },
    background: {
      default: '#ebebeb',
    },
  },
});
