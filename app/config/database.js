const {createPool} = require('nysql')
const { password } = require('pg/lib/defaults')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "rootuser",
    connectionLimit: 10
})

pool.query(`select * from apidb.usera`, (err, res) =>{
    return console.log(res);
})