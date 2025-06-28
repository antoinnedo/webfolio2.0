import { createTheme } from '@mui/material/styles';
import { customColors } from './colors';

// Base theme configuration that will be extended
const baseTheme = {
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4rem',
      '@media (max-width:768px)': {
        fontSize: '3rem',
      },
      '@media (max-width:480px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(2rem, 2.5vw, 3rem)',
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Montserrat", sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          scrollBehavior: 'smooth',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
  },
};

// Function to create theme with proper color integration
export const createAppTheme = (isDarkMode) => {
  const colorScheme = isDarkMode ? customColors.dark : customColors.light;
  
  return createTheme({
    ...baseTheme,
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colorScheme.accentPrimary,
      },
      secondary: {
        main: colorScheme.accentSecondary,
      },
      background: {
        default: colorScheme.backgroundPrimary,
        paper: colorScheme.backgroundCard,
      },
      text: {
        primary: colorScheme.textPrimary,
        secondary: colorScheme.textSecondary,
      },
      custom: colorScheme,
    },
  });
};

// Default export for backwards compatibility
export default createAppTheme(false);