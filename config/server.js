var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

//app.set usado para definir a engine de views
app.set('view engine', 'ejs');
app.set('views', './app/views');

//app.use
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(expressValidator());

//consign
consign()
    .include('app/routes')
    //.then('config/dbConnection.js')
    //.then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;