
const mysql2=require('mysql2')
// const Pool = require('mysql2/typings/mysql/lib/Pool')

const pool=mysql2.createPool({
    host:'0.0.0.0',
    user:'root',
    password:'root123',
    database:'expressdemo',
    port:3306,
    waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports=pool