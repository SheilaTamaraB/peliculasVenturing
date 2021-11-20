import * as React from 'react';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { PeliculasContext } from '../context/peliculaContext'
import { MdDelete, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TablePagination } from '@mui/material';
import Box from '@mui/material/Box';



export default function Peliculas() {
    const [estadoContexto, setEstadoContexto] = React.useContext(PeliculasContext);
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, estadoContexto.peliculas.length - page * rowsPerPage)
    let typingTimer;
    const [buscador, setBuscador] = React.useState('')
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value, 5)
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

    const handlerBuscadorChange = (e) =>{
        setPage(0)
        const {target} = e
        clearTimeout(typingTimer)
        typingTimer = setTimeout (()=>{
            setBuscador(target.value)
        },20);
    }

    return (
        <div >
            <Box sx={{width:'90%', marginLeft:'5%'}}>
                <TextField onChange={(e)=>{handlerBuscadorChange(e)}} placeholder='Buscar por titulo...' style={{width:'95%'}}/>
            </Box>
            {estadoContexto.peliculas &&
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
                                .filter(peliculas => peliculas.titulo.toString().toLowerCase().includes(buscador.toString().toLowerCase()))
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

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }} >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component='div'
                        count={estadoContexto.peliculas.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}

                    />
                </TableContainer>
            }
        </div>
    );
}