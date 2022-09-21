import { AddOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem,
            Select, TableCell, TableRow, TextField, Typography } from '@mui/material'

import React from 'react'
import TableComponent from '../components/TableComponent'
import AdminTemplate from './AdminTemplate'
import {data, titles} from '../data/tableData'

const cardTitle = {
    color: '#adb5bd',
    fontSize: '18px',
    borderBottom: '1px solid #adb5bd',
    marginBottom: '32px',
}

const FormControlStyled = { marginBottom: '12px'}
const SoldCardStyled = { bgcolor: '#5F70A7', minHeight: '120px', color: '#fff'}
const SoldCardHeaderStyled = {
    fontSize: '18px', 
    fontWeight: '800',
    textTransform: 'uppercase', 
    marginBottom: '10px'
}
const SoldCardAmountStyled = {
    backgroundColor: '#fff', 
    color: 'black',
    borderRadius: '50px', 
    fontSize: '18px', 
    width: '50px',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    fontWeight: '900'
}
const SoldCardContentStyled = { 
    display: 'flex', 
    justifyContent: 'space-between' 
}
const tRowsStyles = {
    '&:nth-of-type(even)':{
        bgcolor: '#f1f3f5'
    }
}


const operations = [
    {
        label: 'Achat',
        value: 1
    },
    {
        label: 'Vente',
        value: 2
    }
]

const SoldCard = ({amount, devise, style})=>{
    return (<Card sx={{...SoldCardStyled, ...style}}>
                <CardContent>
                    <Typography component='p' sx={SoldCardHeaderStyled}>
                        Solde
                    </Typography>
                    <Typography component='div' sx={SoldCardContentStyled}>
                        <Typography component='div' sx={{ fontSize: '2.2rem' }}>
                            {amount}
                        </Typography>
                        <Typography component='div' sx={SoldCardAmountStyled}>
                            {devise}
                        </Typography>
                    </Typography>                                
                </CardContent>
            </Card>);
}


function Home() {
    const [operation, setOperation] = React.useState(operations[0].label);

    const handleChange = (event) => {
      setOperation(event.target.value);
    };
  return (
    <Box>
        <Grid container spacing={2} sx={{ marginBottom: '12px' }}>
            <Grid item xs={6}>
                <Typography component='p' sx={cardTitle}>
                    Stock de devises
                </Typography> 
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <SoldCard amount={2000} devise='GNF'/>                        
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Typography component='p' sx={cardTitle}>
                    Achat/Vente de devises
                </Typography>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box>
                                <FormControl fullWidth sx={FormControlStyled}>
                                    <InputLabel>Type de l'operation</InputLabel>
                                    <Select
                                        value={operation}
                                        label="Type de l'operation"
                                        onChange={handleChange}>
                                        {operations.map((operation) => (
                                              <MenuItem key={operation.value} value={operation.label}>
                                                  {operation.label}
                                              </MenuItem>
                                          ))}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth sx={FormControlStyled}>
                                    <TextField fullWidth label="Nom" />
                                </FormControl>
                                <FormControl fullWidth sx={FormControlStyled}>
                                    <TextField fullWidth label="Prenom" />
                                </FormControl>
                                <Button startIcon={<AddOutlined />}
                                        variant='contained'
                                        size='large'
                                        sx={{ backgroundColor: 'primary', fontSize: 14 }}> 
                                    Enregistrer 
                                </Button>
                            </Box>                                                                                       
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography component='p' sx={cardTitle}>
                            Vos dernières opérations
                        </Typography> 
                        <TableComponent titles={titles}>
                            {(data.length) ? data.map((item, key)=>( 
                                <TableRow key={key} sx={tRowsStyles}>
                                    <TableCell>{ (key + 1 )}</TableCell>
                                    <TableCell>{ item.gerant }</TableCell>
                                    <TableCell>{ item.type }</TableCell>
                                    <TableCell>{ item.devise }</TableCell>
                                    <TableCell>{ item.montant }</TableCell>
                                </TableRow> 
                            )): <TableRow></TableRow>}
                        </TableComponent>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography component='p' sx={cardTitle}>
                            Conversion de devises
                        </Typography> 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AdminTemplate(Home)