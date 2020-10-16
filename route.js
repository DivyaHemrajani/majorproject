var app= require('express').Router();
var personaldetailsroute= require ('./personaldetails-route');
var medicaldetailsroute= require ('./medicaldetails-route');


app.use('/personaldetails',personaldetailsroute);
app.use('/medicaldetails',medicaldetailsroute);

module.exports= app;