import { AccountCircleOutlined, FormatListBulletedOutlined, 
  LogoutOutlined, NotificationsNoneOutlined, SettingsOutlined, ShoppingCartOutlined, StackedLineChartOutlined } from '@mui/icons-material';
import { Box, Grid, Popover, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { theme } from '../themes/theme';

const logo = require('../assets/images/logo-blue.png');

const MenuItem = styled('div')(()=>({
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.fontFamily.police.main,
  cursor: 'pointer'
}));

const SideBarStyles = { 
  position: 'fixed',
  bgcolor: theme.palette.primary.main, 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const MenuItemStyles = { 
  display: 'flex',
  flexDirection: 'column', 
  '&:hover':{
    bgcolor: '#fff',
    '& > a > svg, > svg': {
      color: theme.palette.primary.main,
      fontFamily: theme.fontFamily.police.main,
      fontSize: 64
    },
    '& > p':{
      color: theme.palette.primary.main,
    }
  },
  '& > a > svg, > svg':{
    color:'#fff',
    fontSize: 40
  },
  '& > p':{
    fontFamily: theme.fontFamily.police.main,
    fontSize: '14px',
    fontWeight: '400',
    color: '#fff',
  }
}

const MainStyles = {
  marginLeft: '100px',
  overflowX: 'hidden',

}

const NavBarStyles = { 
  position: 'fixed',
  zIndex: '1000',
  bgcolor: '#fff',
  width: '100%',
  fontFamily: theme.fontFamily.police.main,
  maxWidth: 'inherit !important',
  minHeight: '70px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  justifyContent: 'flex-end',
  gap: 6,
  '& > svg':{
    '&:hover':{
      cursor: 'pointer'
    }
  }
}

const LayoutStyles = { 
   bgcolor: '#F8F9FA',
   marginTop: '70px',
   padding: '60px 10px 0px 20px'

}
const AdminTemplate = WrappedComponent =>{

  function Admin() {

    const [notificationPopover, setNotificationPopover] = useState(null);

  
    const openNotificationPopover = (event) => {
      setNotificationPopover(event.currentTarget);
    };
  
    const closeNotificationPopover = (event) => {
      setNotificationPopover(null);
    };
  
    return (    
      <Box sx={{ flexGrow: 1 }}>
          <Grid container
                direction='row'
                bgcolor='white'>
              <Grid item xs={1} sx={SideBarStyles}> 
                 <Typography component='div' sx={{ marginBottom: '16px', marginTop: '16px'}}>
                  <Link to='/admin' >
                    <img src={logo} alt='logo' height="90px" width="90px" />
                  </Link>
                 </Typography>
                 
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/admin'>
                      <ShoppingCartOutlined />
                    </Link>
                    <Typography component='p'>
                        Opérations
                    </Typography>
                 </MenuItem>
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/admin/historique'>
                       <FormatListBulletedOutlined />
                    </Link>
                    <Typography component='p'>
                        Historique
                    </Typography>
                 </MenuItem>
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/admin/config'>
                      <SettingsOutlined />
                    </Link>
                    <Typography component='p'>
                        Configuration
                    </Typography>
                 </MenuItem>
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/admin/rapports'>
                      <StackedLineChartOutlined />
                    </Link>
                    <Typography component='p'>
                        Rapports
                    </Typography>
                 </MenuItem>
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/'>
                        <LogoutOutlined />
                    </Link>
                    <Typography component='p'>
                        Déconnexion
                    </Typography>
                 </MenuItem>
              </Grid>
  
              <Grid item xs={11} sx={MainStyles}> 
                 <Grid item xs={12} sx={NavBarStyles}>
                    <NotificationsNoneOutlined sx={{color: '#adb5bd', fontSize: 32}}
                                                  onClick={openNotificationPopover}
                                                />
                    <AccountCircleOutlined sx={{color: '#adb5bd', fontSize: 32}}/> 
                    <Popover
                        open={Boolean(notificationPopover)}
                        onClose={closeNotificationPopover}
                        anchorEl={notificationPopover}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                      >
                        <Typography variant="h6">Hello World</Typography>
                    </Popover>           
                 </Grid>
                 
                 <Grid item 
                        xs={12}
                        sx={LayoutStyles}>
                    <WrappedComponent />
                 </Grid>
              </Grid>
          </Grid>
      </Box>
    )
  }

  return Admin;
}


export default AdminTemplate;