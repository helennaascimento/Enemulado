const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rotaquestoes = require('./routes/questoes');
const rotausuarios = require('./routes/usuarios');

app.use(bodyParser.urlencoded({ extended: false })); // dados simples
app.use(bodyParser.json()); // json de entrada do body

app.use('/questoes', rotaquestoes);
app.use('/usuarios', rotausuarios);




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname+'/public'));



module.exports = app;