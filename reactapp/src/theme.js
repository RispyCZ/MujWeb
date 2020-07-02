import {
  createMuiTheme
} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#d9534f',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    h1: {
      fontSize: '2.8rem',
      '@media (min-width:600px)': {
        fontSize: '5rem',
      },
    },
    h2: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '4rem',
      },
    },
    h3: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
    }
  },
});

export default theme;