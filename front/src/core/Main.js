import * as React from 'react'
import Navegacion from "../componets/Navegacion";
import { Route, Routes } from 'react-router-dom'
import Peliculas from '../componets/Peliculas';
import Modificar from '../componets/modificar';
import Agregar from '../componets/Agregar';
import Archivo from '../componets/archivo';
import { PeliculasContext } from '../context/peliculaContext'


export default function Main() {
    const [estadoContexto, setEstadoContexto] = React.useContext(PeliculasContext);

    return (
        <div>
            <Navegacion />
            <Routes>
                <Route path='/' element={<Peliculas peliculas={estadoContexto.Peliculas} />} />
                <Route path={'/modificar'} element={<Modificar />} />
                <Route path='/agregar' element={<Agregar />} />
                <Route path='/subir-archivo' element={<Archivo />} />
            </Routes>
        </div>
    );
}