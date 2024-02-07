import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Project/Index';
import { styled, useTheme } from "@mui/material/styles";

import "./App.css"
import { useMediaQuery } from '@mui/material';
// ... other imports
const getCssVariableValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}
const theme = createTheme({
  palette: {
    primary: {
      main: '#E0115F',
      light: getCssVariableValue('--white-color'),
      dark: getCssVariableValue('--green-color'),

      // dark:backgroundPurple
      // You can also define light, dark, and contrastText
    }},
    secondary: {
      main: getCssVariableValue('--lightgreen-color'),
      // Define light, dark, and contrastText if needed
    },
    // Add other palette colors if necessary

  typography: {
    fontFamily: [
      'Lato', // Set Lato as the first priority
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '0.9rem', // Set your desired font size here
        },
      },
    },
  },
});

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home prop={{isMobile}}/>} />
          {/* Other routes */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
