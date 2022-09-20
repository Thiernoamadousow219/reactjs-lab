import { Box, Card, CardContent, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import AdminTemplate from './AdminTemplate'

const Div = styled('div')(()=>({

}))
const tableCardHeadersStyles = {
    color: '#adb5bd',
    fontSize: '18px',
    borderBottom: '1px solid #adb5bd',
    marginBottom: '32px',
}

const tHeadStyles = {
    bgcolor: '#2A4173'
}

const tHeadCellsStyles = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff'
}

const tRowsStyles = {
    '&:nth-child(even)':{
        bgcolor: '#f1f3f5'
    }
}

function Home() {
  return (
    <Box>
        <Grid container spacing={2} sx={{marginBottom: '12px'}}>
                <Grid item xs={6}>
                    <Typography component='p'
                            sx={tableCardHeadersStyles}>
                        Vos stocks de devises
                    </Typography> 
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card sx={{ bgcolor: '#5F70A7', minHeight: '120px',
                                        color: '#fff'}}>
                                <CardContent>
                                    <Typography component='p' sx={{fontSize: '18px', fontWeight: '800',
                                                                    textTransform: 'uppercase', marginBottom: '10px'}}>
                                        Solde
                                    </Typography>
                                    <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography component='div' sx={{ fontSize: '2.2rem' }}>
                                            1 000 000
                                        </Typography>
                                        <Typography component='div'
                                                        sx={{backgroundColor: '#fff', color: 'black',
                                                        borderRadius: '50px', fontSize: '18px', width: '50px',
                                                        display: 'flex', justifyContent: 'center',
                                                        alignItems: 'center', fontWeight: '900'}}>
                                            GNF
                                        </Typography>
                                    </Typography>                                
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ bgcolor: '#006C9E', minHeight: '120px',
                                        color: '#fff'}}>
                                <CardContent>
                                    <Typography component='p' sx={{fontSize: '18px', fontWeight: '800',
                                                                    textTransform: 'uppercase', marginBottom: '10px'}}>
                                        Solde
                                    </Typography>
                                    <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography component='div' sx={{ fontSize: '2.2rem' }}>
                                           90 000
                                        </Typography>
                                        <Typography component='div'
                                                        sx={{backgroundColor: '#fff', color: 'black',
                                                        borderRadius: '50px', fontSize: '18px', width: '50px',
                                                        display: 'flex', justifyContent: 'center',
                                                        alignItems: 'center', fontWeight: '900'}}>
                                            CAD
                                        </Typography>
                                    </Typography>                                
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ bgcolor: '#007D57', minHeight: '120px',
                                        color: '#fff'}}>
                                <CardContent>
                                    <Typography component='p' sx={{fontSize: '18px', fontWeight: '800',
                                                                    textTransform: 'uppercase', marginBottom: '10px'}}>
                                        Solde
                                    </Typography>
                                    <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography component='div' sx={{ fontSize: '2.2rem' }}>
                                           120 000
                                        </Typography>
                                        <Typography component='div'
                                                        sx={{backgroundColor: '#fff', color: 'black',
                                                        borderRadius: '50px', fontSize: '18px', width: '50px',
                                                        display: 'flex', justifyContent: 'center',
                                                        alignItems: 'center', fontWeight: '900'}}>
                                            $
                                        </Typography>
                                    </Typography>                                
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ bgcolor: '#334B49', minHeight: '120px',
                                        color: '#fff'}}>
                                <CardContent>
                                    <Typography component='p' sx={{fontSize: '18px', fontWeight: '800',
                                                                    textTransform: 'uppercase', marginBottom: '10px'}}>
                                        Solde
                                    </Typography>
                                    <Typography component='div' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography component='div' sx={{ fontSize: '2.2rem' }}>
                                           120 000
                                        </Typography>
                                        <Typography component='div'
                                                        sx={{backgroundColor: '#fff', color: 'black',
                                                        borderRadius: '50px', fontSize: '18px', width: '50px',
                                                        display: 'flex', justifyContent: 'center',
                                                        alignItems: 'center', fontWeight: '900'}}>
                                            CFA
                                        </Typography>
                                    </Typography>                                
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography component='p'
                            sx={tableCardHeadersStyles}>
                        Achat/Vente de devises
                    </Typography>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                                       
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography component='p'
                                sx={tableCardHeadersStyles}>
                            Vos dernières opérations
                        </Typography> 
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead sx={tHeadStyles}>
                                    <TableRow>
                                        <TableCell sx={tHeadCellsStyles}>#</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Gerant</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Type</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Devise</TableCell>
                                        <TableCell sx={tHeadCellsStyles}>Montant</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>1</TableCell>
                                        <TableCell>SOW Amadou</TableCell>
                                        <TableCell>Achat</TableCell>
                                        <TableCell>GNF</TableCell>
                                        <TableCell>1 000 000 </TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>2</TableCell>
                                        <TableCell>SOW Amadou</TableCell>
                                        <TableCell>Achat</TableCell>
                                        <TableCell>GNF</TableCell>
                                        <TableCell>1 000 000 </TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>3</TableCell>
                                        <TableCell>SOW Amadou</TableCell>
                                        <TableCell>Achat</TableCell>
                                        <TableCell>GNF</TableCell>
                                        <TableCell>1 000 000 </TableCell>
                                    </TableRow>
                                    <TableRow sx={tRowsStyles}>
                                        <TableCell>4</TableCell>
                                        <TableCell>SOW Amadou</TableCell>
                                        <TableCell>Achat</TableCell>
                                        <TableCell>GNF</TableCell>
                                        <TableCell>1 000 000 </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography component='p'
                                sx={tableCardHeadersStyles}>
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