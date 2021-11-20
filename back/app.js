const { urlencoded, json } = require('express');
const express = require('express')
const app = express();
const logs = require('./controllers/logs')
const router = require('./routers/api')
const cors = require('cors')
const dbConection = require('./modelos/db_connection')
const mysql = require('mysql')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const readline = require('readline');

app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(json())
app.use('/api', [logs, router])



var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './tmp/csv/')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

app.post('/api/uploadPeliculasFile', upload.single("uploadFile"), (req, res) => {
    UploadCsvDataToMySQL(__dirname + '/tmp/csv/' + req.file.filename);
    res.status(201).send('levantado')
});

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'peliculas'
});
function uniq(a) {
    var seen = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

async function UploadCsvDataToMySQL(filePath) {
    const fileStream = fs.createReadStream(filePath);
    let fileData = []
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        fileData.push(("('" + line.slice(0, line.length - 1) + "')").replaceAll(";", "','"))
    }
    fileData = uniq(fileData)
    db.connect((error) => {
        if (error) {
            console.error(error);
        } else {
            fileData.forEach(element => {
                let query = 'INSERT INTO pelicula (titulo, descripcion, ano) VALUES ' + element;
                db.query(query, (error, response) => {
                    console.log(error || response);
                });
            });

        }
    })
    // delete file after saving to MySQL database
    fs.unlinkSync(filePath)
}


app.all('*', (req, res) => {
    res.status(404).send('error en la API')
})
app.listen(7000, () => { })
