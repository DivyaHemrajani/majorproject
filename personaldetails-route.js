var app= require('express').Router();
var personaldetails= require('./personaldetsils');
app.get('/',personaldetails.getall)
app.post('/',personaldetails.add);


module.exports= app;