import * as React from 'react'
import axios from 'axios'




export const PeliculasContext = React.createContext();

const PeliculasContextProvder = props => {
    const [peliculaAmodificar, setPeliculaAModificar] = React.useState()
    const [peliculasDesdeAPI, setPeliculasDesdeAPI] = React.useState([])
    const [peliculas, setPeliculas] = React.useState([])
    React.useEffect(() => {
        axios.get(`http://localhost:7000/api/peliculas`)
            .then(res => {
                setPeliculasDesdeAPI(res.data)
            })
            .catch(err => console.log('err'))
    }, [])

    React.useEffect (()=>{
        peliculasDesdeAPI && setPeliculas(peliculasDesdeAPI)
    },[peliculasDesdeAPI,peliculas])

    

    return (
        <PeliculasContext.Provider value={[peliculas,setPeliculaAModificar,peliculaAmodificar] }>
    { props.children }
        </PeliculasContext.Provider >
    )
}

export default PeliculasContextProvder;