const {Client} = require('pg')
const { password } = require('pg/lib/defaults')

const client = new Client({
    host: "localhost",
    user: "root",
    port: "5000",
    password: "rootuser",
    connectionLimit: 10
})

client.query(`select * from user`, (err, res) =>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})