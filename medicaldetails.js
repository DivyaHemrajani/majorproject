var app= require('express').Router();
var fb= require('../config/fbconfig');
var utils= require('./utils');

var medicaldetailsobj= {

    getall:(req,res)=>{
        fb.ref('/medicaldetails').once('value',success=>{
            let medicaldetails = utils.fbtoarr(success.val());
            return res.send(medicaldetails);
        })
    },
    add:(req,res)=> {
        let m= req.body;
        fb.ref('medicaldetails'). push(m).then(success=> {
            return res.send(success);
        })
    }
};

module.exports= medicaldetailsobj;