const mysql = require('mysql2');
// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sportcipo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 3306,
    dateStrings: true
});
module.exports = pool.promise();