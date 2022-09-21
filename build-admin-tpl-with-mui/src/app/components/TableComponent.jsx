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

const tRowsStyles = {
    '&:nth-of-type(even)':{
        bgcolor: '#f1f3f5'
    }
}

function TableComponent({data, titles}) {
 
    return (
    ((data.length & titles.length) ? 
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead sx={tHeadStyles}>
                    <TableRow>
                        {(titles.length) ? titles.map((item, key)=>(
                            <TableCell key={key} sx={tHeadCellsStyles}>{item.name}</TableCell>
                        )) : <TableCell sx={tHeadCellsStyles}>#</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data.length) ? data.map((item, key)=>( 
                        <TableRow key={key} sx={tRowsStyles}>
                            <TableCell >{ (key + 1 )}</TableCell>
                            <TableCell>{ item.gerant }</TableCell>
                            <TableCell>{ item.type }</TableCell>
                            <TableCell>{ item.devise }</TableCell>
                            <TableCell>{ item.montant }</TableCell>
                        </TableRow> 
                    )): <TableRow></TableRow>}
                </TableBody>
            </Table>
        </TableContainer> : <Typography component='p'>Veillez founir les donnees du tableau</Typography>)
  )
}

export default TableComponent