const express = require('express');
const dbConnection =require('../config/dbConnection');


const loginRouter = express.Router();
    loginRouter.route('/login')
    .put((req,res)=>{ 
        dbConnection.db("data").collection("users").find(req.body)
        .toArray(
        (err,result)=>{
            err? console.log(err,"error"):res.json(result);
            console.log("selesai","login put");

        })
    })
module.exports = loginRouter