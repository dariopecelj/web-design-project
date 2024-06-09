import { createTheme } from '@mui/material/styles';

const darkBlue = '#003366';
const lightGray = '#f4f4f4';
const darkGray = '#0a0a0a';
const white = '#ffffff';

const theme = createTheme({
  palette: {
    primary: {
      main: darkBlue,
      contrastText: white,
    },
    secondary: {
      main: '#0070ba',
      contrastText: white,
    },
    background: {
      default: lightGray,
    },
    text: {
      primary: darkGray,
      secondary: darkBlue,
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: darkBlue,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '0.05em',
      color: darkBlue,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: darkBlue,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: darkGray,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      color: white,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        containedPrimary: {
          backgroundColor: darkBlue,
          color: white,
          '&:hover': {
            backgroundColor: '#002244',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: darkBlue,
          color: white,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: darkBlue,
          color: white,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: white,
          color: darkGray,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
  },
});

export default theme;