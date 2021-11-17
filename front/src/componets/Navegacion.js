import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  Link } from 'react-router-dom';



export default function Navegacion() {

    return (       
            <Box sx={{ margin:'20px auto', width: '30%', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
               
                <Link to="/" style={{ textDecoration: 'none', color: 'grey' }}><Typography sx={{ minWidth: 100 }}>Peliculas</Typography></Link>
                <Link to="/agregar" style={{ textDecoration: 'none', color: 'grey' }}><Typography sx={{ minWidth: 100 }}>Agregar</Typography></Link>
                <Link to="subir-archivo" style={{ textDecoration: 'none', color: 'grey' }}><Typography sx={{ minWidth: 100 }}>Subir archivo</Typography></Link>
               
            </Box>
    )
}