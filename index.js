const userLogin =require('./router/userLogin')

const {
  express,
  bodyParser,
  access,db,
  app,expressPort,
  portDb,
  dbName,dbCol
} =require('./config/variabel')


// Body parser berfunsi untuk menerima reques yang menggirimkan json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//config / setup
app.use(access);


//middleware routing
app.use("/",userLogin)

app.get("/",(req,res)=>{    
    db.db(dbName).collection(dbCol).find()
    .toArray(
        (err,result)=>{
            err? console.log(err,"error"):res.json(result);
            console.log("selesai");
        })
    });
    
    
    // ###############################################################################
    
    app.post("/users/:find",async (req,res)=>{ 
        const {find}=req.params                                             //<= {find} req.params harus di destrukturisasi karena bentuk nyaa req.params adalah sebuah object maka kita harus mengambil data string nya dengan cara di destrukturisasi
        await db.db(dbName).collection(find).find(req.query)                // <= mengapa req.query ini tidak kita destruct karena bentuknya suda object, untuk meng find() sebuah data yang spesifik kita perlu untuk mengirimkan object find({nama:"your name"})
    .toArray((err,result)=>{
        err? console.log(err,"error"):res.json(result)  
    })
    console.log("selesai")
})

app.listen(expressPort,()=>{console.log(`express app running http://localhost:${expressPort}`)})