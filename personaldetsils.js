var app= require('express').Router();
var fb= require('./fbconfig');
var utils= require('./utils');

var personaldetailsobj= {

    getall:(req,res)=>{
        fb.ref('/personaldetails').once('value',success=>{
            let personaldetails = utils.fbtoarr(success.val());
            return res.send(personaldetails);
        })
    },
    add:(req,res)=> {
        let p= req.body;
        fb.ref('personaldetails'). push(p).then(success=> {
            return res.send(success);
        })
    }
};

module.exports= personaldetailsobj;