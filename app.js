const express = require('express');
// const mysql = require('mysql');
const db = require("./config/dbconnect");
const cors = require("cors");


const PORT = process.env.PORT|| 5000;
const app = express();
app.use(cors());
app.use(express.json());//convert in json
app.use(express.urlencoded({ extended: false }));

//Create Connection

//Connect

// app.get('/connectdb', (re,res) =>{
//     let query = 'CREATE DATABASE test';
//     db.query(query,(err,result) =>{
//         if(err){
//             throw err;
//         }
//         console.log(result);
//         res.send('Created database...');
//     })
// });

app.post('/query_to_run', (req,res) =>{
    // console.log(req.body);
    const {query} = req.body;
    // let query = ``;
    db.query(query,(err,result) =>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    })
});

app.get('/', (req,res) =>{
    res.send("Hello from the backend")
});

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
});