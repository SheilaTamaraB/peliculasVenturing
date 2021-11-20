const express = require('express')
const multer = require('multer')
const fs = require('fs')
const csv = require('fast-csv');
const path = require('path')
const router = express.Router()
const { getPeliculas,
    uploadPeliculasFile,
    updateRow,
    deleteRow,
    uploadPelicula
} = require('../controllers/peliculas')


var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './tmp/csv/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

//const upload = multer({ dest: 'tmp/csv/' });

/*router.post('/uploadPeliculasFile', upload.single('file'), function (req, res) {
    console.log(req.file)
});*/

router.route('/peliculas').get(getPeliculas)
//router.route('/uploadPeliculasFile').post(uploadPeliculasFile,upload.single('file'))
router.route('/actualizar').put(updateRow)
router.route('/delete').delete(deleteRow)
router.route('/subirPelicula').post(uploadPelicula)


// upload csv to database
/*router.post('/uploadPeliculasFile', upload.single('file'), (req, res, callBack) => {
    callBack(res.status(201),UploadCsvDataToMySQL(__dirname + '/tmp/csv/' + req.file.filename))
    //console.log('CSV file data has been uploaded in mysql database ' + err);
});*/

function UploadCsvDataToMySQL(filePath) {
    let stream = fs.createReadStream(filePath);
    let csvData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", function () {
            // Remove Header ROW
            csvData.shift();

            // Open the MySQL connection
            db.connect((error) => {
                if (error) {
                    console.error(error);
                } else {
                    let query = 'INSERT INTO peliculas (titulo, descripcion, ano) VALUES ?';
                    db.query(query, [csvData], (error, response) => {
                        console.log(error || response);
                    });
                }
            });

            // delete file after saving to MySQL database
            // -> you can comment the statement to see the uploaded CSV file.
            fs.unlinkSync(filePath)
        });

    stream.pipe(csvStream);
}



module.exports = router