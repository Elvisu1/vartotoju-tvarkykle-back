const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

// database
const db = mysql.createPool({

   host:	"localhost",
   port:	3306,
   user:	"root",
   password:   "root",
   database: "usersdatadb"
})
//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
app.get("/get-users", (req,res) =>{
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const password = req.body.password
    const sql = "SELECT * FROM users "

    ;
    db.query(sql,  (err,result)=>{
        console.log(result)
        res.send(result)
    })


});
app.post('/add-user', (req,res)=>{
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const password = req.body.password
    const sql = "INSERT INTO users (name, age, email, password) VALUES (?,?,?,?)"

  ;
   db.query(sql, [name, age, email, password], (err,result)=>{
       console.log(err)
   })
})
app.delete('/delete-user/:name', (req,res)=>{
    const name = req.params.name
    const sql = "DELETE FROM users WHERE name = ? "
        db.query(sql, name, (err,result)=>{

        })

    ;

})
app.listen(5000,()=>{
   console.log("server running on port 5000")
})

