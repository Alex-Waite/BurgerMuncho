// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();


var connection = mysql.createConnection({
    host: "musicdb-g3.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: process.env.MYSQLPASS, //??????????????
    database: "alexburgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;