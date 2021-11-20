const express = require('express')
const router = express.Router()
const { getPeliculas,
    updateRow,
    deleteRow,
    uploadPelicula
} = require('../controllers/peliculas')



router.route('/peliculas').get(getPeliculas)
router.route('/actualizar').put(updateRow)
router.route('/delete').delete(deleteRow)
router.route('/subirPelicula').post(uploadPelicula)



module.exports = router