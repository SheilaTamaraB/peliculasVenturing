import * as React from 'react'
import axios from 'axios'




export const PeliculasContext = React.createContext();

const PeliculasContextProvider = props => {
    const [estadoContexto, setEstadoContexto] = React.useState({
        peliculaAAgregar: { titulo: '', descripcion: '', ano: '' },
        peliculaAModificar: { titulo: '', descripcion: '', ano: '' },
        peliculaYSusModificaciones: { titulo: '', descripcion: '', ano: '' },
        borrar: '',
        peliculas: [],
    })
    const [volverACargar, setVolverACargar] = React.useState(true)
    
    React.useEffect(() => {
        if (volverACargar === true) {
            axios.get(`http://localhost:7000/api/peliculas`)
                .then(res => {
                    setEstadoContexto({ ...estadoContexto, peliculas: res.data })
                    setVolverACargar(false)
                })
                .catch(err =>
                    console.log('err'))
        }
    }, [estadoContexto, volverACargar])

    React.useEffect(() => {
        if (estadoContexto.peliculaAAgregar.titulo) {
            axios.post(`http://localhost:7000/api/subirPelicula`
                , null, {
                params:
                    estadoContexto.peliculaAAgregar
            })
                .then(res => {
                    setEstadoContexto({ ...estadoContexto, peliculaAAgregar: {} })
                    setVolverACargar(true)
                })
                .catch(err =>
                    console.log('err'))
        }

    }, [estadoContexto.peliculaAAgregar.titulo]);

    React.useEffect(() => {
        if (estadoContexto.peliculaYSusModificaciones.titulo) {
            axios.put(`http://localhost:7000/api/actualizar`
                , null, {
                params:
                    estadoContexto.peliculaYSusModificaciones

            })
                .then(res => {
                    setEstadoContexto({ ...estadoContexto, peliculaYSusModificaciones: {} })
                    setVolverACargar(true)
                })
                .catch(err =>
                    console.log('err'))
        }

    }, [estadoContexto.peliculaYSusModificaciones.titulo]);

    React.useEffect(() => {
        if (estadoContexto.borrar) {
            axios.delete(`http://localhost:7000/api/delete`
                ,{params: {
                    titulo: estadoContexto.borrar
                }
            })
                .then(res => {
                    setEstadoContexto({ ...estadoContexto, borrar: '' })
                    setVolverACargar(true)
                })
                .catch(err =>
                    console.log('err'))
        }

    }, [estadoContexto.borrar]);


    return (
        <PeliculasContext.Provider value={[
            estadoContexto,
            setEstadoContexto]}>
            {props.children}
        </PeliculasContext.Provider >
    )
}

export default PeliculasContextProvider;