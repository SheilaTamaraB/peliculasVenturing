import * as React from 'react';
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import {PeliculasContext} from '../comtext/peliculaContext';


export default function Modificar() {
    const peliculaAmodificar = React.useContext(PeliculasContext)

    return (
        <div>
           <Box sx={{ width: 'auto',  alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ margin: '5px auto', marginTop: '45px', width: '70%', display: 'flex', direction: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                    {peliculaAmodificar && <Typography>{peliculaAmodificar[2].titulo}</Typography>}
                    {peliculaAmodificar &&<Box><Typography>{peliculaAmodificar[2].descripcion}</Typography></Box>}
                    {peliculaAmodificar &&<Typography>{peliculaAmodificar[2].ano}</Typography>}
                </Box>
                <Box>
                    <TextField placeholder='Tutulo' style={{ marginRight: '8px' }} />
                    <TextareaAutosize
                        placeholder="Descripcion"
                        style={{ width: 600, height: '50px', borderColor:'grey' }}
                    />
                    <TextField type="number"
                    style={{marginLeft:'8px'}}
                        placeholder='Año' />
                </Box>
                <Button variant="contained" style={{marginTop:'10px'}}>Modificar</Button>
            </Box>
            

        </div>

    )

}