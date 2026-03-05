import { createTheme } from '@mui/material/styles';

export const createAppTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            primary: { main: '#7C6CF2' },
            secondary: { main: '#FF9F8A' },
            background: { default: '#121212', paper: '#1E1E1E' },
            text: { primary: '#FFFFFF', secondary: '#B0B0B0' },
          }
        : {
            primary: { main: '#5A4FCF' },
            secondary: { main: '#FF8A65' },
            background: { default: '#F7F8FC', paper: '#FFFFFF' },
            text: { primary: '#1A1A1A', secondary: '#5F6368' },
          }),
    },

    typography: {
      fontFamily: `'Inter', 'Poppins', 'Roboto', sans-serif`,
      h1: { fontWeight: 700, letterSpacing: '-0.5px' },
      h2: { fontWeight: 700, letterSpacing: '-0.25px' },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
      body1: { fontWeight: 400, lineHeight: 1.6 },
      body2: { fontWeight: 400, lineHeight: 1.5 },
      button: { fontWeight: 600, textTransform: 'none' },
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiPaper: {
        styleOverrides: {
          root: { borderRadius: 16 },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
    },
  });
