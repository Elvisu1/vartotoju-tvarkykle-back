const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({

   host:	"localhost",
   port:	3306,
   user:	"root",
   password:   "root",
   database: "usersdatadb"
})

app.get("/", (req,res) =>{
const sql =`
INSERT INTO users (name,age, email, password) VALUES ('jonas', 20, 'jonas@gmail.com','123abc')

`
   db.query(sql, (err,result)=>{
      res.send("hello")
   })

});
app.listen(5000,()=>{
   console.log("server running on port 5000")
})

