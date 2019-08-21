var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Oranges55!",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


// // Connect to Heroku
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// // Connect to local host
// else {
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'Oranges55!',
//         database: 'burgers_db'
//     });
// };

module.exports = connection;