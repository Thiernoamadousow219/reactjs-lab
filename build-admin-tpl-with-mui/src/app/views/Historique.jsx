import { Box, Button, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AdminTemplate from './AdminTemplate'
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

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
}

const tHeadStyles = {
  bgcolor: '#2A4173'
}

const tHeadCellsStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#fff'
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
  fontSize: '18px',
  fontWeight:'bold',
}
const venteDevise = {
  color:'#37b24d',
  fontSize:'18px',
  fontWeight:'bold',
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
  justifyContent: 'center',
  position: 'relative',
  top: '10px',
}
function Historique() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={6} md={12} lg={12} sm={6}>
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
                                        <TableCell sx={tHeadCellsStyles}>Imprimer</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>1</TableCell>
                                        <TableCell>Thierno Amadou Sow</TableCell>
                                        <TableCell>GNF</TableCell>
                                        <TableCell>1 000 000 </TableCell>
                                        <TableCell sx={achactDevise}>Achat</TableCell>
                                        <TableCell>3 500 000</TableCell>
                                        <Button sx={button} variant="contained"><LocalPrintshopOutlinedIcon/>Imprimer</Button>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>2</TableCell>
                                        <TableCell>Thierno Amadou Sow</TableCell>
                                        <TableCell>CAD</TableCell>
                                        <TableCell>6 650 </TableCell>
                                        <TableCell sx={venteDevise}>Vente</TableCell>
                                        <TableCell>22 500</TableCell>
                                        <Button  sx={button} variant="contained"><LocalPrintshopOutlinedIcon/>Imprimer</Button>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>3</TableCell>
                                        <TableCell>Thierno Amadou Sow</TableCell>
                                        <TableCell>USD</TableCell>
                                        <TableCell>2 500 </TableCell>
                                        <TableCell sx={achactDevise}>Achat</TableCell>
                                        <TableCell>10 000</TableCell>
                                        <Button  sx={button} variant="contained"><LocalPrintshopOutlinedIcon/>Imprimer</Button>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>4</TableCell>
                                        <TableCell>Thierno Amadou Sow</TableCell>
                                        <TableCell>CFA</TableCell>
                                        <TableCell>70 000 </TableCell>
                                        <TableCell sx={venteDevise}>Vente</TableCell>
                                        <TableCell> 2 500 000</TableCell>
                                        <Button  sx={button} variant="contained"><LocalPrintshopOutlinedIcon/>Imprimer</Button>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>5</TableCell>
                                        <TableCell>Thierno Amadou Sow</TableCell>
                                        <TableCell>GNF</TableCell>
                                        <TableCell>570 000 </TableCell>
                                        <TableCell sx={achactDevise}>Achat</TableCell>
                                        <TableCell> 2 500 000</TableCell>
                                        <Button  sx={button} variant="contained"><LocalPrintshopOutlinedIcon/>Imprimer</Button>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>6</TableCell>
                                        <TableCell>Thierno Amadou Sow</TableCell>
                                        <TableCell>CFA</TableCell>
                                        <TableCell>10 000 </TableCell>
                                        <TableCell sx={venteDevise}>Vente</TableCell>
                                        <TableCell> 2 500 000</TableCell>
                                        <Button  sx={button} variant="contained"><LocalPrintshopOutlinedIcon/>Imprimer</Button>
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