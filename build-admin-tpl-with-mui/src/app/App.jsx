import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themes/theme';
import Home from './views/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Historique from './views/Historique';
<<<<<<< HEAD
import Profile from './views/Profile';
=======
import Config from './views/Config';
>>>>>>> 36716a2420fe5bbc64cc3c7a35bab7d9bbfc5861

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='admin'>
                <Route index element={<Home />} />
                <Route path='historique' element={<Historique />} />
<<<<<<< HEAD
                <Route path='profil' element={<Profile/>}/>
=======
                <Route path='config' element={<Config />} />
>>>>>>> 36716a2420fe5bbc64cc3c7a35bab7d9bbfc5861
            </Route>
        </Routes>    
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App
