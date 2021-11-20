import * as React from 'react';
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { PeliculasContext } from '../context/peliculaContext';
import { useNavigate } from "react-router-dom";


export default function Modificar() {
    //const peliculaAModificar = React.useContext(PeliculasContext)
    const navigate = useNavigate();
    const [estadoContexto, setEstadoContexto] = React.useContext(PeliculasContext)
    const peliculaModificable = estadoContexto && estadoContexto.peliculaAModificar
    const [estado, setEstado] = React.useState({ titulo: '', descripcion: '', ano: '' })

    const handleChange = (e) => {
        setEstado({ ...estado, [e.target.name]: e.target.value })
    }
    React.useEffect(() => {
        setEstado({ ...estado, titulo: peliculaModificable.titulo })
    }, [])
    function handleClick() {
        setEstado({
            ...estado,
            descripcion: estado.descripcion ? estado.descripcion : peliculaModificable.descripcion,
            ano: estado.ano ? estado.ano : peliculaModificable.ano
        })
        if (estado.titulo && estado.descripcion && estado.ano) {
            enviarModificaciones()
        }

    }

    function enviarModificaciones() {
        setEstadoContexto({ ...estadoContexto, peliculaYSusModificaciones: estado })
        navigate('/')
    }

    return (
        <div>
            <Box sx={{ width: 'auto', alignItems: 'center', textAlign: 'center' }}>
                <Box sx={{ margin: '5px auto', marginTop: '45px', width: '70%', display: 'flex', direction: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                    {peliculaModificable && <Typography >{peliculaModificable.titulo}</Typography>}
                    {peliculaModificable && <Box sx={{ textAlign: 'left', textJustify: 'inter-word' }}><p>{peliculaModificable.descripcion}</p></Box>}
                    {peliculaModificable && <Typography>{peliculaModificable.ano}</Typography>}
                </Box>
                <Box sx={{ marginRight: '15%', alignItems: 'right', textAlign: 'right' }}>

                    <TextareaAutosize
                        name='descripcion'
                        placeholder="Descripcion"
                        style={{ width: 500, height: '50px', borderColor: 'grey' }}
                        onChange={handleChange}
                    />
                    <TextField type="number"
                        name='ano'
                        style={{ marginLeft: '8px' }}
                        placeholder='Año'
                        onChange={handleChange} />
                </Box>
                <Button variant="contained" style={{ marginTop: '10px' }}
                    onClick={handleClick}
                >Modificar</Button>
            </Box>


        </div>

    )

}