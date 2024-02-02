import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css'
import Home from './code/Home';
import { backgroundPurple, darkPurple, lightPurple } from './code/components/Veriables';
const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: darkPurple,
        light: lightPurple,
        // dark:backgroundPurple
        // You can also define light, dark, and contrastText
      },
      // secondary: {
      //   main: '#494c7d', // Custom secondary color
      //   // Define light, dark, and contrastText if needed
      // },
      // // Add other palette colors if necessary
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
