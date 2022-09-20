import React from 'react';
import '../assets/css/app.css';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import { FormGroup, InputPassword, InputText } from '../components/Input';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import { theme } from '../themes/theme';

const logo = require('../assets/images/logo.png');

const LeftPanel = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    minHeight: '100vh',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }));

const RightPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  color: '#727082'
});

function Login() {

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container 
              direction='row'
              spacing={2}>
            <Grid item
                  xs={6}
                  sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}}}>
                <LeftPanel>
                   <Typography variant='h2' component='h2' mb={8}>
                      Bienvenu chez nous !
                   </Typography>
                   <Typography component='p' p={2} sx={{lineHeight: 1.6}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, similique. Quae vero repudiandae iusto nesciunt tenetur asperiores, amet earum itaque quisquam harum! Recusandae consequatur in neque. Ratione maiores totam laborum.
                   </Typography>
                </LeftPanel>
            </Grid>
            <Grid item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}>
                <RightPanel>
                    <img src={logo} alt="logo" style={{ height: 300 }} />
                    <FormGroup>
                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                            
                            <InputText label='Telephone' />   
                        </Box>
                    </FormGroup>
                    <FormGroup>
                        <InputPassword label='Mot de passe' />
                    </FormGroup>
                    <FormGroup>
                      <Button startIcon={<LoginTwoToneIcon />}
                              variant='contained'
                              size='large'
                              sx={{ backgroundColor: 'primary', fontSize: 14,
                                    "&:hover":{backgroundColor: theme.palette.secondary}}}> 
                          Connectez-vous 
                      </Button>                 
                    </FormGroup>
                </RightPanel>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Login
