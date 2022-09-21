import { Box, Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AdminTemplate from './AdminTemplate';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: '10px 10px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm','xs')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
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
  width: '100%',
  [theme.breakpoints.up('sm','md')]: {
    marginLeft: theme.spacing(1),
    width: '18%',
  },
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
  // borderBottom: '1px solid #adb5bd',
  marginBottom: '32px',
  fontFamily:'ubuntu',
}

const tHeadStyles = {
  bgcolor: '#2A4173',
  fontFamily:'ubuntu',
}

const tHeadCellsStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#fff',
  textAlign:'center',
  fontFamily:'ubuntu',
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
const achactDevise = {
  color:'#c92a2a',
  // fontSize: '18px',
  textAlign:'center',
  fontFamily:'ubuntu',
}
const venteDevise = {
  color:'#37b24d',
  textAlign:'center',
  // fontSize:'18px',
  fontFamily:'ubuntu',
}
const rechercheCard = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '12px',
  paddingLeft:'20px',
}
const placeholder = {
  color:'#333',
}

const button = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  // top: '10px',
  fontFamily:'ubuntu',
}
const buttonDanger = {
  backgroundColor:"#C80A0A",
  color:"#fff",
  display: 'flex',
  justifyContent:'center',
  position: 'relative',
  // top: '20px',
  fontFamily:'ubuntu',
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
  fontFamily:'ubuntu',
}
const tableContent = {
  textAlign:'center',
  fontFamily:'ubuntu',
} 
function Historique() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={6} md={12} lg={12} sm={12}>
                <Card>
                    <CardContent>
                      <Grid container spacing={2} sx={rechercheCard}>
                        <Typography component='p'
                                  sx={tableCardHeadersStyles}>
                              Historique des Transactions
                          </Typography> 
                          <Search>
                            <SearchIconWrapper>
                              <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase sx={placeholder}
                              placeholder="Rechercher"
                              inputProps={{ 'ubuntu': 'Rechercher' }}
                            />
                          </Search>
                      </Grid>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead sx={tHeadStyles}>
                                    <TableRow>
                                        <TableCell sx={tHeadCellsStyles}>#</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Gerant</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Devise</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Montant</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Type</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Solde</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell sx={tableContent}>1</TableCell>
                                        <TableCell sx={tableContent}>Thierno Amadou Sow</TableCell>
                                        <TableCell sx={tableContent}>GNF</TableCell>
                                        <TableCell sx={tableContent}>1 000 000 </TableCell>
                                        <TableCell sx={achactDevise}>Achat</TableCell>
                                        <TableCell sx={tableContent}>3 500 000</TableCell>
                                        <TableCell sx={actions}><Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> <Button sx={buttonDanger} variant="contained"><CancelOutlinedIcon sx={btnIcon}/>Annuler</Button></TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell sx={tableContent}>2</TableCell>
                                        <TableCell sx={tableContent}>Thierno Amadou Sow</TableCell>
                                        <TableCell sx={tableContent}>CAD</TableCell>
                                        <TableCell sx={tableContent}>6 650 </TableCell>
                                        <TableCell sx={venteDevise}>Vente</TableCell>
                                        <TableCell sx={tableContent}>22 500</TableCell>
                                        <TableCell sx={actions}><Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> <Button sx={buttonDanger} variant="contained"><CancelOutlinedIcon sx={btnIcon} />Annuler</Button></TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell sx={tableContent}>3</TableCell>
                                        <TableCell sx={tableContent}>Thierno Amadou Sow</TableCell>
                                        <TableCell sx={tableContent}>USD</TableCell>
                                        <TableCell sx={tableContent}>2 500 </TableCell>
                                        <TableCell sx={achactDevise}>Achat</TableCell>
                                        <TableCell sx={tableContent}>10 000</TableCell>
                                        <TableCell sx={actions}><Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> <Button sx={buttonDanger} variant="contained"><CancelOutlinedIcon sx={btnIcon} />Annuler</Button></TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell sx={tableContent}>4</TableCell>
                                        <TableCell sx={tableContent}>Thierno Amadou Sow</TableCell>
                                        <TableCell sx={tableContent}>CFA</TableCell>
                                        <TableCell sx={tableContent}>70 000 </TableCell>
                                        <TableCell sx={venteDevise}>Vente</TableCell>
                                        <TableCell sx={tableContent}> 2 500 000</TableCell>
                                        <TableCell sx={actions}><Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> <Button sx={buttonDanger} variant="contained"><CancelOutlinedIcon sx={btnIcon} />Annuler</Button></TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell sx={tableContent}>5</TableCell>
                                        <TableCell sx={tableContent}>Thierno Amadou Sow</TableCell>
                                        <TableCell sx={tableContent}>GNF</TableCell>
                                        <TableCell sx={tableContent}>570 000 </TableCell>
                                        <TableCell sx={achactDevise}>Achat</TableCell>
                                        <TableCell sx={tableContent}> 2 500 000</TableCell>
                                        <TableCell sx={actions}><Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> <Button sx={buttonDanger} variant="contained"><CancelOutlinedIcon sx={btnIcon} />Annuler</Button></TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell sx={tableContent}>6</TableCell>
                                        <TableCell sx={tableContent}>Thierno Amadou Sow</TableCell>
                                        <TableCell sx={tableContent}>CFA</TableCell>
                                        <TableCell sx={tableContent}>10 000 </TableCell>
                                        <TableCell sx={venteDevise}>Vente</TableCell>
                                        <TableCell sx={tableContent}> 2 500 000</TableCell>
                                        <TableCell sx={actions}><Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon sx={btnIcon}/>Imprimer</Button> <Button sx={buttonDanger} variant="contained"><CancelOutlinedIcon sx={btnIcon} />Annuler</Button></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AdminTemplate(Historique);