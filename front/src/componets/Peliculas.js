import * as React from 'react';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { PeliculasContext } from '../context/peliculaContext'
import { MdDelete, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TablePagination } from '@mui/material';



export default function Peliculas() {
    const [estadoContexto, setEstadoContexto] = React.useContext(PeliculasContext);
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, estadoContexto.peliculas.length - page * rowsPerPage)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value,5)
        setPage(0)
    }


    function rowClicked(pelicula) {
        setEstadoContexto({ ...estadoContexto, peliculaAModificar: pelicula })
        navigate('/modificar')
    }
    function deleteRow(pelicula) {
        console.log(pelicula)
        setEstadoContexto({ ...estadoContexto, borrar: pelicula })
    }


    return (
        <div >{estadoContexto.peliculas &&
            <TableContainer>
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
                        {estadoContexto.peliculas && estadoContexto.peliculas
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((p, i) =>
                                <TableRow >
                                    <TableCell> {p.titulo} </TableCell>
                                    <TableCell> {p.descripcion} </TableCell>
                                    <TableCell> {p.ano} </TableCell>
                                    <TableCell><IconButton onClick={() => rowClicked(p)}><MdOutlineDriveFileRenameOutline /></IconButton></TableCell>
                                    <TableCell><IconButton onClick={() => deleteRow(p.titulo)}><MdDelete /></IconButton></TableCell>
                                </TableRow>

                            )}

                            {emptyRows > 0  &&(
                                <TableRow style={{height:53 * emptyRows}} >
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                    </TableBody>

                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component='div'
                    count={estadoContexto.peliculas.length + 1}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={ handleChangeRowsPerPage}

                />
            </TableContainer>
        }
        </div>
    );
}