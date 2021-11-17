import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { PeliculasContext } from '../context/peliculaContext'


export default function Peliculas() {
    //const [peliculas, setPeliculaAModificar] = React.useContext(PeliculasContext);
    const [estadoContexto,setEstadoContexto]  = React.useContext(PeliculasContext);

    const navigate = useNavigate();

    function rowClicked(pelicula) {
        setEstadoContexto({...estadoContexto,peliculaAModificar: pelicula})
        navigate('/modificar')
    }

    
    return (
        <div >{estadoContexto.peliculas &&
            <Table style={{ margin: '10px auto', width: '90%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell> Titulo </TableCell>
                        <TableCell> Descripcion </TableCell>
                        <TableCell> Año </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {estadoContexto.peliculas && estadoContexto.peliculas.map((p, i) =>
                        <TableRow onClick={() => rowClicked(p)}>
                            <TableCell> {p.titulo} </TableCell>
                            <TableCell> {p.descripcion} </TableCell>
                            <TableCell> {p.ano} </TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>
        }
        </div>
    );
}