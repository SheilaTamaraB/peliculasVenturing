import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Archivo (){

    return(
        <Box sx={{ width: 'auto',  alignItems: 'center', textAlign: 'center' }}>
            <Button variant="outlined">Subir Archivo</Button>
        </Box>
    )
}