import * as React from 'react';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { PeliculasContext } from '../context/peliculaContext'
import { MdDelete,MdOutlineDriveFileRenameOutline } from "react-icons/md";
//MdDelete


export default function Peliculas() {
    //const [peliculas, setPeliculaAModificar] = React.useContext(PeliculasContext);
    const [estadoContexto,setEstadoContexto]  = React.useContext(PeliculasContext);

    const navigate = useNavigate();

    function rowClicked(pelicula) {
        setEstadoContexto({...estadoContexto,peliculaAModificar: pelicula})
        navigate('/modificar')
    }
    function deleteRow(pelicula) {
        console.log(pelicula)
        setEstadoContexto({...estadoContexto, borrar: pelicula})        
    }

    
    return (
        <div >{estadoContexto.peliculas &&
            <Table style={{ margin: '10px auto', width: '90%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell> Titulo </TableCell>
                        <TableCell> Descripcion </TableCell>
                        <TableCell> Año </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {estadoContexto.peliculas && estadoContexto.peliculas.map((p, i) =>
                        <TableRow >
                            <TableCell> {p.titulo} </TableCell>
                            <TableCell> {p.descripcion} </TableCell>
                            <TableCell> {p.ano} </TableCell>
                            <TableCell><IconButton onClick={() => rowClicked(p)}><MdOutlineDriveFileRenameOutline/></IconButton></TableCell>
                            <TableCell><IconButton onClick={() => deleteRow(p.titulo)}><MdDelete/></IconButton></TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>
        }
        </div>
    );
}