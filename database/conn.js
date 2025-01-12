const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    database: 'uas_barang'
})

db.connect  ((err) =>{
    if (err){
        console.error('Gk nyambung DB')
        return
    }
    console.log("Konek Database")
})



module.exports = db