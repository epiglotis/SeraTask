import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createMuiTheme } from '@mui/material';
import MainPage from './Components/MainPage/MainPage';

const theme = createMuiTheme({
  palette: {
    // Customize colors here
    primary: {
      main: '#EEEEE', // Change to your desired primary color
    },
    secondary: {
      main: '#39C250', // Change to your desired secondary color
    },
    // You can also customize other colors like error, warning, success, etc.
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
