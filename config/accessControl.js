const express = require('express');
const access =express()
.use(  (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT');
    // res.setHeader('Access-Control-Allow-Origin','Content-Type, Authorization');
    next()
})
module.exports = access