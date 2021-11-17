const mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//create db
let sqlDB = 'CREATE DATABASE IF NOT EXISTS peliculas'
con.query(sqlDB, err => {
    if (err) { throw err +' no se pudo crear la base' }
})

con.end()

con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'peliculas'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//tabla
let sqlT = 'CREATE TABLE IF NOT EXISTS pelicula (titulo VARCHAR(30) NOT NULL UNIQUE, descripcion varchar(150), ano SMALLINT, PRIMARY KEY(titulo))'

con.query(sqlT, err => {
    if (err) { throw err + ' no se pudo crear la tabla '}
}) 

con.end()

