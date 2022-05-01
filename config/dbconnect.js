/* LIBRARIES */
const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Brij@2003',
    database : 'vehicle',
    multipleStatements:true
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Connected successfully with database...');
    console.log("========================================");
    console.log();
});

module.exports = db ;