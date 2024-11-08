require("dotenv").config();
const mysql = require("mysql2");

// creating the database conneection

const db =  mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

if(db) {
    console.log("Database connected successfully");
}
    
module.exports = db; 


   