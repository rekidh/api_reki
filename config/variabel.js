//express config
const express = require('express')
require('dotenv').config()
const app = express();
const db = require('./dbConnection')
// const db = require('./dbConnection')
const access = require('./accessControl')
const bodyParser = require('body-parser')
const expressPort = process.env.PORT;


// mongo db config
const portDb = 27017 ;
const dbName = process.env.DB_NAME
const dbCol  = "post"

module.exports={
  express,
  bodyParser,
  app,db,
  access,
  expressPort,
  portDb,
  dbName,
  dbCol
}