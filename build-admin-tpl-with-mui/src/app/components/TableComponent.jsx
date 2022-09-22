import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const tHeadStyles = {
    bgcolor: '#2A4173'
}

const tHeadCellsStyles = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff'
}


function TableComponent({ titles, children}) {
 
    return (
    ((titles.length) ? 
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead sx={tHeadStyles}>
                    <TableRow>
                        {(titles.length) ? titles.map((item, key)=>(
                            <TableCell key={key} sx={tHeadCellsStyles}>{item}</TableCell>
                        )) : <TableCell sx={tHeadCellsStyles}>#</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    { children }
                </TableBody>
            </Table>
        </TableContainer> : <Typography component='p'>Veillez founir les donnees du tableau</Typography>)
  )
}

export default TableComponent