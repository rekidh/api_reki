```
// DOCUMENTATION
/*
ln-19    jika anda terkoneksi anda bisa melakukan perintah , apasaja yang berhubugan dengan databases
ln-21   variabel databases di samping bertujuan untuk memperjelas docs dibawah "anda dapat menghapus nya"

    untuk inset data seperti ini kira2 penggunaan nya
    '''
     let data = { a,b,c,d,e,f}
     databases.insert(
         data,             // data yang ingin di masukan di bawah nya adalah callback function
         (err,con)=>{
             if(err){ return console.log(`not connect ${err}`)}
             console.log(con)
         })
     '''
     untuk bisa mengetahui method apa saja yang tersedia
     anda bisa melihat documentation MongoDb
     https://www.mongodb.com/docs/drivers/
 */

// DOCUMENTATION
/* jika ada get ke sles home ("/") lakukan callback function ini
    client.db().collection().find().toArray()
    method di atas bermaksud ( mongodb carikan saya .db("nama db") dan dengan nama .collection("nama dokumen") dan .find("apa yg ingin di temukan ") lalau jadikan array gengan method .toArray())
    toArray harus memiliki calback seperti di bawah ini
    toArray((err,res)=>{})
*/
```
