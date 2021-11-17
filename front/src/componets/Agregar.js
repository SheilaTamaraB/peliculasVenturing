import * as React from 'react';
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';


export default function Agregar() {

    return (
        <div>
            <Box sx={{ width: 'auto',  alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ margin: 'auto', marginBottom: '30px' }}>
                    <Box sx={{ margin: '5px auto', marginTop: '45px', width: '70%', display: 'flex', direction: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                        <Typography>TITULO</Typography>
                        <Box><Typography>DESCRIPCION</Typography></Box>
                        <Typography>AÑO</Typography>
                    </Box>
                    <Box>
                        <TextField placeholder='Tutulo' style={{ marginRight: '8px' }} />
                        <TextareaAutosize
                            placeholder="Descripcion"
                            style={{ width: 600, height: '50px', borderColor: 'grey' }}
                        />
                        <TextField type="number"
                            style={{ marginLeft: '8px' }}
                            placeholder='Año' />
                    </Box>
                </Box>
                <Button variant="contained" style={{ margin: '0 auto' }}>Agregar</Button>
            </Box>
        </div>

    )

}