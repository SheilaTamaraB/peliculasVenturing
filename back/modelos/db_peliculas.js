const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'peliculas'

});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

const insertarPelicula = (titulo, descripcion, ano, callback) => {
    let post = { titulo, descripcion, ano }
    let sql = 'INSERT INTO pelicula SET ?'
    db.query(sql, post, (err, success) => {
        if (err) {
            console.log( ' no se insertar registro el la tabla pelicula ')
        } else {
            return callback(success)
        }
    })
}

const seleccionarPeliculas = (callback) => {
    let sql = 'SELECT * FROM pelicula'
    db.query(sql, (err, resultado) => {
        if (err) {
            console.log(err + ' no se encontro registro el la tabla pelicula ')
        } else {
            return callback(resultado)
        }
    })
}


const actualizarPelicula = (t, d, a, callback) => {
    console.log(t + d + a)
    let datosACambiar = { descripcion: d, ano: a }
    let sql = `UPDATE pelicula SET ? WHERE titulo = ?`
    db.query(sql,  [datosACambiar,t ], (err, resultado) => {
        if (err) {
            console.log(+ ' no se actualizo registro el la tabla pelicula ')
        } else {
            return callback(resultado)
        }
    })
}

const eliminarPelicula = (t,callback) => {
    let sql = `DELETE FROM pelicula WHERE titulo = ?`
    db.query(sql,[t], (err, resultado) => {
        if (err) {console.log( err + ' no se elimino registro el la tabla pelicula ' )
    }else {
        return callback(resultado)
    }
    })
}

module.exports = {
    insertarPelicula,
    seleccionarPeliculas,
    actualizarPelicula,
    eliminarPelicula
}