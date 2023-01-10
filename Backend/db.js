const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yash@2512',
    database: 'netbanking',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })

  module.exports = pool