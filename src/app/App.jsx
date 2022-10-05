import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Historique from './views/Historique';
import Config from './views/Config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='admin'>
                <Route index element={<Home />} />
                <Route path='historique' element={<Historique />} />
                <Route path='config' element={<Config />} />
            </Route>
        </Routes>    
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App
