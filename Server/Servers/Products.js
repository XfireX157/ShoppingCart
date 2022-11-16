const mysql = require('mysql2')

const dbproduto = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "252525",
    database: "dbproduto",
    port: "3306"
})

module.exports = dbproduto