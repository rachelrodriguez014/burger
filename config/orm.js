var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (tableInput, col1, col2, cb) {
        var queryString = "INSERT INTO " + tableInput;

        // Converting to string and organize information
        queryString += " (";
        queryString += col1.toString();
        queryString += ") "
        queryString += "VALUES (";
        queryString += "?"
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, [col2], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableInput, columnValue, condition, cb) {
        var queryString = "UPDATE " + tableInput;
        queryString += " SET " + sqlObject(columnValue);
        queryString += " WHERE ";
        queryString += condition;


        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;