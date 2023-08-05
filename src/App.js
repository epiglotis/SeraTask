import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import MainPage from './Components/MainPage/MainPage';
import '@fontsource/poppins';
import { Provider } from 'react-redux';
import { store } from './store';

const theme = createTheme({
  palette: {
    // Customize colors here
    primary: {
      main: '#EEEEE', // Change to your desired primary color
    },
    secondary: {
      main: '#39C250', // Change to your desired secondary color
    },
    background:{
      default:"#F9F9F9",

    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Sidebar />
        <MainPage />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
