import * as React from 'react';
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { PeliculasContext } from '../context/peliculaContext';
import { useNavigate } from "react-router-dom";


export default function Agregar() {
    //const [peliculas, setPeliculaAAgregar] = React.useContext(PeliculasContext)
    const [estadoContexto,setEstadoContexto]  = React.useContext(PeliculasContext);

    const [estado, setEstado] = React.useState({ titulo: '', descripcion: '', ano: '' })
    const navigate = useNavigate();
    const handleChange = (e) => {
        setEstado({ ...estado, [e.target.name]: e.target.value })
    }

    function handleClick() {
        if (!estado.titulo) {
            return            
        }
        //setPeliculaAAgregar(null)
        //setPeliculaAAgregar(estado)
        setEstadoContexto({...estadoContexto,peliculaAAgregar: estado})        
        navigate('/')

    }


    return (
        <div>
            <Box sx={{ width: 'auto', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ margin: 'auto', marginBottom: '30px' }}>
                    <Box sx={{ margin: '5px auto', marginTop: '45px', width: '70%', display: 'flex', direction: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                        <Typography>TITULO</Typography>
                        <Box><Typography>DESCRIPCION</Typography></Box>
                        <Typography>AÑO</Typography>
                    </Box>
                    <Box>
                        <TextField placeholder='Título' style={{ marginRight: '8px' }}
                            name='titulo'
                            onChange={handleChange} />
                        <TextareaAutosize
                            placeholder="Descripcion"
                            style={{ width: 600, height: '50px', borderColor: 'grey' }}
                            name='descripcion'
                            onChange={handleChange}
                        />
                        <TextField type="number"
                            style={{ marginLeft: '8px' }}
                            placeholder='Año'
                            name='ano'
                            onChange={handleChange} />
                    </Box>
                </Box>
                <Button variant="contained" style={{ margin: '0 auto' }} onClick={handleClick}>Agregar</Button>
            </Box>
        </div>

    )

}