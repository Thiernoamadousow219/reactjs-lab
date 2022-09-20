import { AccountCircleOutlined, FormatListBulletedOutlined, 
  LogoutOutlined, NotificationsNoneOutlined, ShoppingCartOutlined } from '@mui/icons-material';
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
  cursor: 'pointer'
}));

const DropDownItem = styled('div')(()=>({
  borderTop: '1px solid #adb5bd',
}))

const SideBarStyles = { 
  position: 'fixed',
  bgcolor: theme.palette.primary.main, 
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const MenuItemStyles = {  
  '&:hover':{
    bgcolor: '#fff',
    '& > a > svg, > svg': {
      color: theme.palette.primary.main,
      fontSize: 64
    }
  },
  '& > a > svg, > svg':{
    color:'#fff',
    fontSize: 40
  }
}

const MainStyles = {
  //  bgcolor: '#F8F9FA'
  marginLeft: '100px',
  overflowX: 'hidden'

}

const NavBarStyles = { 
  position: 'fixed',
  bgcolor: '#fff',
  width: '100%',
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

    const [userPopover, setUserPopover] = useState(null);
    const [notificationPopover, setNotificationPopover] = useState(null);
    
    const openUserPopover = (event) => {
      setUserPopover(event.currentTarget);
    };
  
    const closeUserPopover = (event) => {
      setUserPopover(null);
    };
  
  
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
                 <img src={logo} alt='logo' height={100} />
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/admin'>
                      <ShoppingCartOutlined />
                    </Link>
                 </MenuItem>
                 <MenuItem sx={MenuItemStyles}>
                    <Link to='/admin/historique'>
                      <FormatListBulletedOutlined />
                    </Link>
                 </MenuItem>
                 <MenuItem sx={MenuItemStyles}>
                   <LogoutOutlined />
                 </MenuItem>
              </Grid>
  
              <Grid item xs={11} sx={MainStyles}> 
                 <Grid item xs={12} sx={NavBarStyles}>
                    <NotificationsNoneOutlined sx={{color: '#adb5bd', fontSize: 32}}
                                                  onClick={openNotificationPopover}
                                                />
                    <AccountCircleOutlined sx={{color: '#adb5bd', fontSize: 32}} 
                                              onClick={openUserPopover}
                                            /> 
                    <Popover
                        open={Boolean(userPopover)}
                        onClose={closeUserPopover}
                        anchorEl={userPopover}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                       
                      >
                        <DropDownItem>
                            Mon compte
                        </DropDownItem>
                    </Popover>    
  
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