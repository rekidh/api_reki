const {MongoClient} = require("mongodb");
require('dotenv').config()

const url    =  process.env.DB_URL;
const client = new MongoClient(url,{useNewUrlParser: true,useUnifiedTopology: true,})
// create connection to databases
client.connect((error,client)=>{
    error?console.log(`conn err ${error}`):console.log("terkonesi")
  })


module.exports=client