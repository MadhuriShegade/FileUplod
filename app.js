var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

//app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('views', './views');
app.set('view engine', 'pug');

app.get("/", function(request, res) {
    console.log("in get");
    res.render('index', { title: 'Hey', message: 'Hello' });
});

app.get("/grid/:column/:row", function(req, res) {
    console.log(req.params)
    console.log("in grid");

    res.render('grid', { column: req.params.column, row: req.params.row });
});

app.get("/flex/:column/:row", function(req, res) {
    console.log("in flex");
});

app.listen(8080);