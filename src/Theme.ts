import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#3c405b',
      light: '#665671',
      contrastText: '#f4f1de',
    },
    secondary: {
      main: '#df7a5e',
      light: '#e2a679',
      contrastText: '#f4f1de',
    },
    background: {
      default: '#f4f1de',
    },
    text: {
      primary: '#3c405b'
    }
  },
});

export default theme;