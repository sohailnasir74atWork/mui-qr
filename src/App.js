import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Project/Index';
import { useMediaQuery } from '@mui/material';
import "./App.css"

const getCssVariableValue = (variable) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

const theme = createTheme({
  palette: {
    primary: {
      main: getCssVariableValue('--darkgreen-color'),
      light: getCssVariableValue('--white-color'),
      dark: getCssVariableValue('--green-color'),
    },
    secondary: {
      main: getCssVariableValue('--lightgreen-color'),
    },
  },
  typography: {
    fontFamily: [
      'Lato',
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
          fontSize: '0.9rem',
        },
      },
    },
  },
});

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home prop={{ isMobile }} />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
