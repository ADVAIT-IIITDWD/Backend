const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Brij@2003',
    database : 'employees',
    multipleStatements:true
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Connected successfully with database...');
});

module.exports = db ;