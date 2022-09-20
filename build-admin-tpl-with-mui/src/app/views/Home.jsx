import { Box, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import AdminTemplate from './AdminTemplate'

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
                </Grid>
                <Grid item xs={6}>
                    <Typography component='p'
                            sx={tableCardHeadersStyles}>
                        Achat/Vente de devises
                    </Typography> 
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