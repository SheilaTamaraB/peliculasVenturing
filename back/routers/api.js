const express = require('express')
const multer = require('multer')
const router = express.Router()
const { getPeliculas,
    uploadPeliculasFile,
    updateRow,
    deleteRow,
    uploadPelicula
} = require('../controllers/peliculas')

const upload = multer({ dest: 'tmp/csv/' });

router.post('/uploadPeliculasFile', upload.single('file'), function (req, res) {
    console.log(req.file)
});

router.route('/peliculas').get(getPeliculas)
//router.route('/uploadPeliculasFile').post(uploadPeliculasFile,upload.single('file'))
router.route('/actualizar').put(updateRow)
router.route('/delete').delete(deleteRow)
router.route('/subirPelicula').post(uploadPelicula)

module.exports = router