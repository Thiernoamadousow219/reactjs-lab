import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../themes/theme'

const tHeadStyles = {
    bgcolor: '#2A4173'
}

export const tRowStyles = {
    '&:nth-of-type(even)':{
        bgcolor: '#f1f3f5'
    }
}

export const tCellStyles = {
    textAlign:'center',
    fontFamily: theme.fontFamily.police.main,
  } 

const tHeadCellsStyles = {
    textAlign:'center',
    fontFamily: theme.fontFamily.police.main,
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff'
}


function TableComponent({ columns, children}) {
 
    return (
    ((columns.length) ? 
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead sx={tHeadStyles}>
                    <TableRow>
                        {(columns.length) ? columns.map((column, key)=>(
                            <TableCell key={key} sx={tHeadCellsStyles}>{column}</TableCell>
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