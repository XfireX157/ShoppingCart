const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "252525",
    database: "banco",
    port: "3306"
})

module.exports = db
