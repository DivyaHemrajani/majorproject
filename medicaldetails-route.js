var app= require('express').Router();
var medicaldetails= require('./medicaldetails');
app.get('/',medicaldetails.getall)
app.post('/',medicaldetails.add);


module.exports= app;