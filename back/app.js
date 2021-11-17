const { urlencoded } = require('express');
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const logs = require ('./controllers/logs')
const router = require('./routers/api')
const cors = require('cors')
const dbConection = require('./modelos/db_connection')

console.log('hola...')
app.use( urlencoded({extended:false}))
app.use(cors())
app.use('/api', [logs , router])
//app.use(express,urlencoded({extended:false}))
app.all('*',(req,res) => {
    res.status(404).send('error en la API')
})

app.listen(7000,() => {})
