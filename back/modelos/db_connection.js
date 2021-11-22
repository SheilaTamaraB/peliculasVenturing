const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//create db
let sqlDB = 'CREATE DATABASE IF NOT EXISTS peliculas'
db.query(sqlDB, err => {
    if (err) { throw err +' no se pudo crear la base' }
})

db.end()

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'peliculas'
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//tabla
let sqlT = 'CREATE TABLE IF NOT EXISTS pelicula (titulo VARCHAR(200) NOT NULL UNIQUE, descripcion varchar(400), ano SMALLINT, PRIMARY KEY(titulo))'

db.query(sqlT, err => {
    if (err) { throw err + ' no se pudo crear la tabla '}
}) 

db.end()

