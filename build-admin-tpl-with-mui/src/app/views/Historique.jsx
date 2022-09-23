import { Box, Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AdminTemplate from './AdminTemplate';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import { theme } from '../themes/theme';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { historiques, historiqueColumns } from '../data/historiqueData';
import TableComponent from '../components/TableComponent';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: '10px 10px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: '8px',
  width: '18%',
  height: '36px',
  bottom: '5px',
  top: '12px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f5f6f4',
  '&:hover': {
    backgroundColor: '#f5f6f4',
  },
  marginLeft: 0,
  width: '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const tableCardHeadersStyles = {
  color: '#555',
  fontSize: '42px',
  fontFamily : theme.fontFamily.police.main,
  marginBottom: '32px',
}

const tHeadStyles = {
  bgcolor: '#2A4173',
  fontFamily: theme.fontFamily.police.main,
}

const tHeadCellsStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#fff',
  textAlign:'center',
  fontFamily: theme.fontFamily.police.main,
}

const tRowsStyles = {
  '&:nth-child(even)':{
      bgcolor: '#f1f3f5'
  }
}
const historyTitle = {
  fontSize:'48px',
  color:'#adb5bd',
}
const achatDevise = {
  color:'#c92a2a',
  textAlign:'center',
  fontFamily: theme.fontFamily.police.main,
}
const venteDevise = {
  color:'#37b24d',
  textAlign:'center',
  fontFamily: theme.fontFamily.police.main,
}
const historiqueHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '12px',
  paddingLeft:'20px',
}
const searchContainer = {
  width: '350px !important'
}
const searchInput = {
  color:'#333',
}

const button = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  fontFamily: theme.fontFamily.police.main,
}
const buttonDanger = {
  backgroundColor:"#C80A0A",
  color:"#fff",
  display: 'flex',
  justifyContent:'center',
  position: 'relative',
  fontFamily: theme.fontFamily.police.main,
}
const btnIcon = {
  display:'flex',
  justifyContent:'space-evenly',
  marginRight:'10px',
}
const actions = {
  display:'flex',
  justifyContent:'space-evenly',
  alignItems:'center',
  fontFamily: theme.fontFamily.police.main,
}
const tableContent = {
  textAlign:'center',
  fontFamily: theme.fontFamily.police.main,
} 
function Historique() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={6} md={12} lg={12} sm={12}>
                <Card>
                    <CardContent>
                      <Typography component='div' spacing={2} sx={historiqueHeader}>
                          <Typography component='p' sx={tableCardHeadersStyles}>
                              Historique des Transactions
                          </Typography> 
                          <Search sx={searchContainer}>
                            <SearchIconWrapper>
                              <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase sx={searchInput}
                              placeholder="Rechercher"
                              inputProps={{ 'ubuntu': 'Rechercher' }}
                              type="search"
                            />
                          </Search>
                      </Typography>
                     
                      <TableComponent columns={historiqueColumns} >
                          {(historiques.length) ? historiques.map((historique, key)=>(
                              <TableRow sx={tRowsStyles}>
                                  <TableCell sx={tableContent}>{ key + 1}</TableCell>
                                  <TableCell sx={tableContent}>{historique.client}</TableCell>
                                  <TableCell sx={tableContent}>{historique.devise}</TableCell>
                                  <TableCell sx={tableContent}>{historique.montant}</TableCell>
                                  <TableCell sx={(historique.type === 'Achat') ? achatDevise: venteDevise}>
                                    {historique.type}
                                  </TableCell>
                                  <TableCell sx={tableContent}>{historique.solde}</TableCell>
                                  <TableCell sx={actions}>
                                    <Button sx={button} variant="contained">
                                      <LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> 
                                    <Button sx={buttonDanger} variant="contained">
                                      <CancelOutlinedIcon sx={btnIcon}/>Annuler
                                    </Button>
                                  </TableCell>
                              </TableRow> 
                          )) :  <TableRow></TableRow>}
                      </TableComponent>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AdminTemplate(Historique);