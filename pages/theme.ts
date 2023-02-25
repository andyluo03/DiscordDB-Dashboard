import { extendTheme } from '@mui/joy/styles';

export default extendTheme({
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          100: '#7289da',
          500: '#FFFFFF',
          600: '#FFFFFF',
        },
      },
    },
    dark: {
      palette: {  
        primary: {
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#FFFFFF',
          700: '#FFFFFF',
          800: '#FFFFFF',
          900: '#36393e',
        },
      },
    },
  },
});
