const fs = require('fs')
const { actualizarPelicula,
    eliminarPelicula,
    insertarPelicula,
    seleccionarPeliculas } = require('../modelos/db_peliculas')

const getPeliculas = (req, res) => {
    return seleccionarPeliculas((response) => { res.status(200).json(response) })

}



const uploadPelicula = (req, res) => {
    const datos = req.query
    insertarPelicula(datos.titulo, datos.descripcion, datos.ano
        , (respuesta) => {
            res.status(201).send(respuesta)
        })
}

const updateRow = (req, res) => {
    const datos = req.query
    actualizarPelicula(datos.titulo, datos.descripcion, datos.ano
        , (respuesta) => {
            res.status(201).send(respuesta)
        })
}

const deleteRow = (req, res) => {
    const datos = req.query
    eliminarPelicula(datos.titulo
        , (respuesta) => {
            res.status(201).send(respuesta)
        })
}


module.exports = { getPeliculas, updateRow, deleteRow, uploadPelicula }